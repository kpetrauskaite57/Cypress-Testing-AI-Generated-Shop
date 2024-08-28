import React from 'react';
import './Home.css';
import bookData from '../data/bookData';  // Ensure this path is correct

const Home = () => {
  // Flatten all books from the bookData to display them
  const featuredBooks = bookData.flatMap(category => category.books).slice(0, 6); // Displaying first 6 books for simplicity

  return (
    <div className="home-container">
      <h1 className="welcome-title">Welcome to the Bookstore</h1>
      <div className="deals">
        <h2 className="deals-title">Deals</h2>
        <div className="featured-books">
          <h2 className="featured-books-title">Featured Books</h2>
          <div className="books-list">
            {featuredBooks.map(book => (
              <div key={book.id} className="book-card">
                <img src={book.image || 'https://via.placeholder.com/150'} alt={book.title} className="book-image" />
                <div className="book-info">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">{book.author}</p>
                  <p className="book-price">
                    <span className="original-price">${book.price}</span>
                    <span className="discounted-price">${(book.price * 0.5).toFixed(2)}</span>
                  </p>
                  <p className="book-description">{book.description}</p>
                  <div className="book-reviews">
                    <span className="book-rating">⭐⭐⭐⭐⭐</span> {/* Example static rating */}
                    <span className="review-count">(120 reviews)</span>
                  </div>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
