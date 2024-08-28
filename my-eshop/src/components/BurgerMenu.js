import React from 'react';

function BurgerMenu({ categories, setCategory }) {
  return (
    <div className="burger-menu">
      <h3>Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => setCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BurgerMenu;
