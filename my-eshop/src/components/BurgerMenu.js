import React from 'react';
import './BurgerMenu.css';

const BurgerMenu = ({ onCategoryClick }) => {
  return (
    <div className="burger-menu">
      <h2>Categories</h2>
      <ul>
        <li><button onClick={() => onCategoryClick('Fiction Books')}>Fiction Books</button></li>
        <li><button onClick={() => onCategoryClick('Kids\' Books')}>Kids' Books</button></li>
        <li><button onClick={() => onCategoryClick('Science Fiction')}>Science Fiction</button></li>
        <li><button onClick={() => onCategoryClick('Non-Fiction')}>Non-Fiction</button></li>
        {/* Add more categories as needed */}
      </ul>
    </div>
  );
};

export default BurgerMenu;
