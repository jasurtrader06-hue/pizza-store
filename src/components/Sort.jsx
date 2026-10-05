import React, { useState, useRef, useEffect } from "react";
import { sortOptions } from "./categoriesData";

function Sort({ activeSort, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = sortOptions.find((o) => o.id === activeSort.id);

  return (
    <div className="sort" ref={ref}>
      <span className="sort__label">Сортировка по:</span>
      <span className="sort__value" onClick={() => setOpen(!open)}>
        {selected.name}
      </span>
      {open && (
        <div className="sort__popup">
          {sortOptions.map((option) => (
            <div
              key={option.id}
              className={option.id === activeSort.id ? "active" : ""}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sort;
