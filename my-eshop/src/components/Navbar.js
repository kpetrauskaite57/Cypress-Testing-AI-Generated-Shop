// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <h1>Bookstore</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
