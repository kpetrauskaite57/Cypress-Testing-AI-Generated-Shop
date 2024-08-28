import React, { useState } from 'react';
import './BurgerMenu.css';

const BurgerMenu = ({ onCategoryClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Burger menu button clicked'); // Debug log to check if function is triggered
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu-container">
      <button className="burger-button" onClick={toggleMenu}>
        ☰ Menu
      </button>
      {isOpen && (
        <div className="burger-menu">
          <h2>Categories</h2>
          <ul>
            <li><button onClick={() => onCategoryClick('Fiction Books')}>Fiction Books</button></li>
            <li><button onClick={() => onCategoryClick('Kids\' Books')}>Kids' Books</button></li>
            <li><button onClick={() => onCategoryClick('Science Fiction')}>Science Fiction</button></li>
            <li><button onClick={() => onCategoryClick('Non-Fiction')}>Non-Fiction</button></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
