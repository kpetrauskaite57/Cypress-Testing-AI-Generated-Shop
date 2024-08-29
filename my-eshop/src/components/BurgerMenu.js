import React, { useState } from 'react';
import './styles/BurgerMenu.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="burger-button" onClick={toggleMenu}>☰</button>
      <div className={`burger-menu ${isOpen ? 'active' : ''}`}>
        <h2>Menu</h2>
        <ul>
          <li><button onClick={() => window.location.href = '/'}>Home</button></li>
          <li><button onClick={() => window.location.href = '/login'}>Login</button></li>
          <li><button onClick={() => window.location.href = '/register'}>Register</button></li>
          <li><button onClick={() => window.location.href = '/cart'}>Cart</button></li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
