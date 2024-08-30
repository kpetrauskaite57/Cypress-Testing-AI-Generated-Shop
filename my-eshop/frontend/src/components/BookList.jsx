import React from 'react';

const fetchBooks = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/books');
    const data = await response.json();
    setBooks(data);
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};


const BookList = ({ books, onBookClick }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-item" onClick={() => onBookClick(book)}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
