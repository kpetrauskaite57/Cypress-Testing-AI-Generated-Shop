// src/components/BookList.js
import React from 'react';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          {/* Add more book details as needed */}
        </div>
      ))}
    </div>
  );
};

export default BookList;
