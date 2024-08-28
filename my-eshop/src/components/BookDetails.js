// src/components/BookDetails.js
import React from 'react';
import books from '../data/bookData';

const BookDetails = ({ bookId, category }) => {
  const book = books[category]?.find((b) => b.id === bookId);

  if (!book) return <div>Book not found</div>;

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Year:</strong> {book.year}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <div className="add-to-cart">
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default BookDetails;
