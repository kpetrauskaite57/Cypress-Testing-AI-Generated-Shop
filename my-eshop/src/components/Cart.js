import React from 'react';

function Cart({ cart }) {
  const totalPrice = cart.reduce((total, item) => total + item.book.price * item.quantity, 0);

  return (
    <div className="cart">
      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <p>{item.book.title} - {item.quantity} x ${item.book.price}</p>
          </div>
        ))
      )}
      <h4>Total: ${totalPrice.toFixed(2)}</h4>
    </div>
  );
}

export default Cart;
