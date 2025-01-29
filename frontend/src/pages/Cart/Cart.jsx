import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../../context/shopContext';
import CartTotal from '../../components/CartTotal/CartTotal';
import './Cart.css';
import { MdDeleteForever } from 'react-icons/md';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (!products.length || !cartItems || typeof cartItems !== 'object') return;

    const tempData = Object.entries(cartItems).flatMap(([itemId, sizes]) =>
      Object.entries(sizes)
        .filter(([, quantity]) => quantity > 0)
        .map(([size, quantity]) => ({
          _id: itemId,
          size,
          quantity,
        }))
    );

    setCartData(tempData);
  }, [cartItems, products]);

  return (
    <div>
      <div className="cart-content-container">
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);
          if (!productData) return null;

          return (
            <div className="cart-item" key={index}>
              <div className="cart-item-info">
                {productData.image && productData.image.length > 0 && (
                  <img src={productData.image[0]} alt="" className="product-cart-image" />
                )}
                <div className="product-details-cart">
                  <p className="cart-product-name">{productData.name}</p>
                  <div className="product-price-size">
                    <p>
                      <p className='cart-product-price'>{currency} {productData.price} </p>
                    </p>
                    <p className="size">Size: {item.size}</p>
                  </div>
                </div>
              </div>

              <input
                type="number"
                className="quantity-input"
                min={1}
                defaultValue={item.quantity}
                onChange={(e) =>
                  e.target.value === '' || Number(e.target.value) === 0
                    ? null
                    : updateQuantity(item._id, item.size, Number(e.target.value))
                }
              />

              <MdDeleteForever className="delete-icon" onClick={() => updateQuantity(item._id, item.size, 0)} />
            </div>
          );
        })}
      </div>

      <div className="checkout-container">
        <div className="checkout-box">
          <CartTotal />
          <div className="checkout-button-container">
            <button className="checkout-button">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

