const BASE_URL = "https://6aaa775dff4dd5698b4e92c0.mockapi.io/pizza";

async function request(path, options) {
  let res;
  try {
    res = await fetch(BASE_URL + path, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });
  } catch (e) {
    throw new Error("Serverga ulanib bo'lmadi. Backend ishlab turibdimi? (npm start)");
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.xato || "Xatolik: " + res.status);
  return data;
}

export function fetchPizzas(options) {
  options = options || {};
  const params = [];
  if (options.category !== null && options.category !== undefined) params.push("category=" + options.category);
  if (options.sortBy) params.push("sortBy=" + options.sortBy);
  if (options.order) params.push("order=" + options.order);
  return request("/pizzas?" + params.join("&"));
}
export const createPizza = (p) => request("/pizzas", { method: "POST", body: JSON.stringify(p) });
export const updatePizza = (id, p) => request("/pizzas/" + id, { method: "PUT", body: JSON.stringify(p) });
export const deletePizza = (id) => request("/pizzas/" + id, { method: "DELETE" });
export const createOrder = (o) => request("/orders", { method: "POST", body: JSON.stringify(o) });
export const getOrders = () => request("/orders");
export const advanceOrder = (id) => request("/orders/" + id + "/status", { method: "PATCH" });
