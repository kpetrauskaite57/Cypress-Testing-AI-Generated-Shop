import React, { useState } from 'react';
import BookList from './BookList';
import BurgerMenu from './BurgerMenu';
import BookDetails from './BookDetails';
import bookData from '../data/bookData';

const Home = ({ setSelectedBook }) => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBookState] = useState(null);
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
    setSelectedBookState(null); // Reset the selected book
  };

  const handleBookClick = (book) => {
    setSelectedBookState(book);
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
          <>
            <div className="deals">
              <h2>Deals</h2>
              {/* Add sample deals here */}
              <div className="deal-item">
                <h3>Deal of the Day</h3>
                <p>50% off on selected books!</p>
                {/* Add more details about the deal */}
              </div>
              <div className="deal-item">
                <h3>Weekend Special</h3>
                <p>Buy 2 get 1 free on all fiction books.</p>
                {/* Add more details about the deal */}
              </div>
            </div>
            <BookList books={books} onBookClick={handleBookClick} />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
