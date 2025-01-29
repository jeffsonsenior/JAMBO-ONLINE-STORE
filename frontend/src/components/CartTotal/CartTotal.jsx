import React, { useContext } from 'react';
import { ShopContext } from '../../context/shopContext';
import './CartTotal.css';

const CartTotal = () => {
  const { currency, getCartItems, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="cart-total-container">
      <div className="cart-title">
        <h2>CART TOTAL</h2>
      </div>
      <div className="cart-total-details">
        <div className="cart-row">
          <p>Subtotal:</p>
          <p>{currency}{getCartAmount()}</p>
        </div>
        <hr className="cart-divider" />
        <div className="cart-row">
          <p>Shipping Fee:</p>
          <p>{currency}{delivery_fee}</p>
        </div>
        <div className="cart-row cart-total">
          <p>Total:</p>
          <b>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}</b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;