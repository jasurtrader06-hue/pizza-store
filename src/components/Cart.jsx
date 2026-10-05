import React from 'react';
import EmptyCart from './EmptyCart';

function Cart({ items, onChangeCount, onRemove, onClear, onBack, onPay }) {
  let totalCount = 0;
  let totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    totalCount += items[i].count;
    totalPrice += items[i].price * items[i].count;
  }

  if (items.length === 0) {
    return <EmptyCart onBack={onBack} />;
  }

  return (
    <div className="cart">
      <div className="cart__top">
        <h2>
          <span className="cart__icon">🛒</span> Корзина
        </h2>
        <button className="cart__clear" onClick={onClear}>
          🗑 Очистить корзину
        </button>
      </div>

      <div className="cart__items">
        {items.map((item) => (
          <div className="cart-item" key={item.cartId}>
            <div className="cart-item__img">
              <img src={item.imageUrl} alt={item.name} />
            </div>
            <div className="cart-item__info">
              <h3>{item.name}</h3>
              <p>
                {item.type} тесто, {item.size} см.
              </p>
            </div>
            <div className="cart-item__count">
              <button
                className="cart-item__count-btn"
                disabled={item.count <= 1}
                onClick={() => onChangeCount(item.cartId, item.count - 1)}
              >
                −
              </button>
              <b>{item.count}</b>
              <button
                className="cart-item__count-btn"
                onClick={() => onChangeCount(item.cartId, item.count + 1)}
              >
                +
              </button>
            </div>
            <div className="cart-item__price">{item.price * item.count} ₽</div>
            <button className="cart-item__remove" onClick={() => onRemove(item.cartId)}>
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="cart__bottom">
        <span>
          Всего пицц: <b>{totalCount} шт.</b>
        </span>
        <span>
          Сумма заказа: <b className="cart__total">{totalPrice} ₽</b>
        </span>
      </div>

      <div className="cart__actions">
        <button className="button button--outline" onClick={onBack}>
          ‹ Вернуться назад
        </button>
        <button className="button button--pay" onClick={onPay}>
          Оплатить сейчас
        </button>
      </div>
    </div>
  );
}

export default Cart;
