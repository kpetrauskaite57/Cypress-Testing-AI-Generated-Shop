import React, { useState } from 'react';
import { books } from './data/books';
import BurgerMenu from './components/BurgerMenu';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Cart from './components/Cart';
import './style.css';

function App() {
  const categories = [...new Set(books.map(book => book.category))];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [cart, setCart] = useState([]);

  const selectBook = (book) => {
    setSelectedBook(book);
  };

  const addToCart = (book, quantity) => {
    setCart([...cart, { book, quantity }]);
  };

  return (
    <div className="app">
      <BurgerMenu categories={categories} setCategory={setSelectedCategory} />
      <div className="content">
        <BookList books={books.filter(book => book.category === selectedCategory)} selectBook={selectBook} />
        {selectedBook && <BookDetails book={selectedBook} addToCart={addToCart} />}
      </div>
      <Cart cart={cart} />
    </div>
  );
}

export default App;
