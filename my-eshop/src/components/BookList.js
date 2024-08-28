import React from 'react';

function BookList({ books, selectBook }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-item" onClick={() => selectBook(book)}>
          <h4>{book.title}</h4>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BookList;
