import React from 'react';
import { Link } from 'react-router-dom';
import bookData from '../data/bookData'; // Corrected path
import '../styles/Home.css';

const Home = () => {
  const deals = bookData.flatMap(category => category.books)
                        .filter(book => book.discountedPrice < book.fullPrice)
                        .slice(0, 3); // Get top 3 books for "Deal of the Day"

  return (
    <div className="home">
      <header className="home-header">
        <h1 className="home-title">Welcome to the Bookstore</h1>
        <h2 className="home-deals-header">Deal of the Day</h2>
      </header>
      <section className="home-deals">
        {deals.map(book => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} className="book-image" />
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">{book.author}</p>
            <p className="book-price">
              <span className="discounted-price">${book.discountedPrice.toFixed(2)}</span> 
              <span className="full-price">${book.fullPrice.toFixed(2)}</span>
            </p>
            <Link to={`/book/${book.id}`} className="view-details">View Details</Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
