import React from 'react';
import './styles/Cart.css';
function Cart({ cart }) {
  const totalPrice = cart.reduce((total, item) => {
    const price = item.discountedPrice ?? item.fullPrice;  // Use discountedPrice or fallback to fullPrice
    return total + (price * item.quantity);
  }, 0);

  return (
    <div className="cart">
      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <p>{item.title} - {item.quantity} x ${item.discountedPrice ? item.discountedPrice.toFixed(2) : item.fullPrice.toFixed(2)}</p>
          </div>
        ))
      )}
      <h4>Total: ${totalPrice.toFixed(2)}</h4>
    </div>
  );
}

export default Cart;
