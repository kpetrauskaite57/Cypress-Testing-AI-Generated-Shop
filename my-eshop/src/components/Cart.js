import React from 'react';
import '../style.css';


function Cart() {
  // Dummy cart items
  const cartItems = [
    { id: 1, name: 'Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', price: 19.99 }
  ];

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>${item.price}</p>
        </div>
      ))}
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
