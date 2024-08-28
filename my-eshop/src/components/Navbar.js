import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="left-section">
        <button className="burger-button">☰</button>
        <div className="logo">Bookstore</div>
      </div>
      <nav>
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        <a href="/cart">Cart</a>
      </nav>
    </header>
  );
};

export default Navbar;
