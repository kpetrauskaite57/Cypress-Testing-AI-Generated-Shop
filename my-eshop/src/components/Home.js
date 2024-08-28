import React, { useState } from 'react';
import BookList from './BookList';
import BurgerMenu from './BurgerMenu';
import bookData from '../data/bookData';

const Home = ({ setSelectedBook }) => {
  const [books, setBooks] = useState([]);

  const onCategoryClick = (category) => {
    // Filter books based on the selected category
    const categoryData = bookData.find(cat => cat.category === category);
    if (categoryData) {
      setBooks(categoryData.books);
    } else {
      setBooks([]); // No books for this category
    }
  };

  return (
    <div className="home">
      <BurgerMenu onCategoryClick={onCategoryClick} />
      <BookList books={books} />
    </div>
  );
};

export default Home;
