// src/components/BurgerMenu.js
import React from 'react';
import './BurgerMenu.css';

const BurgerMenu = ({ onCategoryClick }) => {
  return (
    <div className="burger-menu">
      <h2>Categories</h2>
      <ul>
        <li><button onClick={() => onCategoryClick('Fiction')}>Fiction Books</button></li>
        <li><button onClick={() => onCategoryClick('Kids')}>Kids' Books</button></li>
        {/* Add more categories as needed */}
      </ul>
    </div>
  );
};

export default BurgerMenu;
