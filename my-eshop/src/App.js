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
import Faq from './components/FAQ';


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, { book, quantity: 1 }]);
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

            <Route path="/cart" element={<Cart cart={cart} />} />
            <Route path="/" element={<Home />} />
            <Route path="/FAQ" element={<FAQ />} /> 
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
