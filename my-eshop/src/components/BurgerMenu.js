import React, { useState, useEffect, useRef } from 'react';
import './BurgerMenu.css';

const BurgerMenu = ({ onCategoryClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle outside click to close the menu
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button className="burger-button" onClick={toggleMenu}>
        ☰ Menu
      </button>
      {isOpen && (
        <div className="burger-menu" ref={menuRef}>
          <h2>Categories</h2>
          <ul>
            <li><button onClick={() => { onCategoryClick('Fiction Books'); setIsOpen(false); }}>Fiction Books</button></li>
            <li><button onClick={() => { onCategoryClick('Kids\' Books'); setIsOpen(false); }}>Kids' Books</button></li>
            <li><button onClick={() => { onCategoryClick('Science Fiction'); setIsOpen(false); }}>Science Fiction</button></li>
            <li><button onClick={() => { onCategoryClick('Non-Fiction'); setIsOpen(false); }}>Non-Fiction</button></li>
            {/* Add more categories as needed */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;

