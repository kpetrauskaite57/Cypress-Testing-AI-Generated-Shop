import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/BurgerMenu.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <button onClick={toggleMenu}>
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      {isOpen && (
        <ul>
          <li><button onClick={() => navigate('/')}>Home</button></li>
          <li><button onClick={() => navigate('/login')}>Login</button></li>
          <li><button onClick={() => navigate('/register')}>Register</button></li>
        </ul>
      )}
    </div>
  );
}

export default BurgerMenu;
