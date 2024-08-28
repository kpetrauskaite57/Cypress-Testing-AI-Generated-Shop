import React, { useState } from 'react';
import BookList from './BookList';
import BurgerMenu from './BurgerMenu';
import BookDetails from './BookDetails';
import bookData from '../data/bookData';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cart, setCart] = useState([]);

  const onCategoryClick = (category) => {
    const categoryData = bookData.find(cat => cat.category === category);
    if (categoryData) {
      setBooks(categoryData.books);
      setSelectedCategory(category);
    } else {
      setBooks([]);
    }
    setSelectedBook(null); // Reset the selected book
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const addToCart = (book, quantity) => {
    setCart([...cart, { book, quantity }]);
  };

  return (
    <div className="home">
      <BurgerMenu onCategoryClick={onCategoryClick} />
      <div className="content">
        {selectedBook ? (
          <BookDetails 
            bookId={selectedBook.id} 
            category={selectedCategory} 
            addToCart={addToCart} 
          />
        ) : (
          <BookList books={books} onBookClick={handleBookClick} />
        )}
      </div>
    </div>
  );
};

export default Home;
