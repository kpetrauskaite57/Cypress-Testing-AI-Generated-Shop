import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BurgerMenu from './components/BurgerMenu';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import BookDetails from './components/BookDetails';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <BurgerMenu className="burger-menu" />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/book/:id" element={<BookDetails addToCart={addToCart} />} />
          </Routes>
        </div>
        <Cart cart={cart} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
