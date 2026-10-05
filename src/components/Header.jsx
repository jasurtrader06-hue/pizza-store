import React from 'react';

function Header({ totalPrice, totalCount, onCartClick, onAdminClick, subtitle }) {
  return (
    <div className="header">
      <div className="header__logo">
        <span className="header__logo-icon">🍕</span>
        <div>
          <div className="header__title">REACT PIZZA</div>
          {subtitle && <div className="header__subtitle">{subtitle}</div>}
        </div>
      </div>

      <div className="header__actions">
        {onAdminClick && (
          <button className="header__admin-btn" onClick={onAdminClick} title="Admin panel">
            ⚙
          </button>
        )}
        {onCartClick && (
          <button className="header__cart-btn" onClick={onCartClick}>
            <span>{totalPrice} ₽</span>
            <span className="header__cart-divider" />
            <span className="header__cart-icon">🛒</span>
            <span>{totalCount}</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
