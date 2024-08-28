// App.js
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
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <BurgerMenu />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home setSelectedBook={setSelectedBook} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/book/:id" element={<BookDetails book={selectedBook} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
