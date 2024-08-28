// src/components/Home.js
import React, { useState } from 'react';
import BookList from './BookList';
import BurgerMenu from './BurgerMenu';
import bookData from '../data/bookData'; // Assuming bookData is being used

const Home = () => {
  const [books, setBooks] = useState(bookData);

  const onCategoryClick = (category) => {
    // Filter books based on category
    const filteredBooks = bookData.filter(book => book.category === category);
    setBooks(filteredBooks);
  };

  return (
    <div className="home">
      <BurgerMenu onCategoryClick={onCategoryClick} />
      <BookList books={books} />
    </div>
  );
};

export default Home;
