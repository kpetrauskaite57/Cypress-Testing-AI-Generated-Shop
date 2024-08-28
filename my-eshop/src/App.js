import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BurgerMenu from './components/BurgerMenu';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import BookDetails from './components/BookDetails';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const addToCart = (book, quantity) => {
    setCart([...cart, { book, quantity }]);
  };

  const handleCategoryClick = (category) => {
    // Handle category selection (passed down to BurgerMenu)
    console.log(`Category selected: ${category}`);
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <BurgerMenu onCategoryClick={handleCategoryClick} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home setSelectedBook={setSelectedBook} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/book/:id" element={<BookDetails book={selectedBook} addToCart={addToCart} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
