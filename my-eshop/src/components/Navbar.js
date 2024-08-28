import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';


function Navbar() {
  return (
    <nav className="navbar">
      <h1>My E-Shop</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
