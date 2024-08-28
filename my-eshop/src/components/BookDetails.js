import React from 'react';
import { useParams } from 'react-router-dom';
import bookData from '../data/bookData';

const BookDetails = ({ addToCart }) => {
  const { id } = useParams();
  const book = bookData.flatMap(category => category.books).find(book => book.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(book);
  };

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <img src={book.image || 'https://via.placeholder.com/300'} alt={book.title} className="book-image" />
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Year:</strong> {book.year}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Price:</strong> ${book.price.toFixed(2)}</p>
      <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default BookDetails;
