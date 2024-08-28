import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import books from '../data/bookData';

const BookDetails = ({ addToCart }) => {
  const { id } = useParams();
  const book = books.flatMap(category => category.books).find(b => b.id === parseInt(id));
  
  const [quantity, setQuantity] = useState(1);
  const [newReview, setNewReview] = useState('');

  if (!book) return <div>Book not found</div>;

  const handleAddToCart = () => {
    addToCart(book, quantity);
  };

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Year:</strong> {book.year}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Price:</strong> ${book.price.toFixed(2)}</p>
      <div className="reviews">
        <h3>Reviews</h3>
        {book.reviews.map((review, index) => (
          <p key={index}>{review}</p>
        ))}
      </div>
      <div className="new-review">
        <h3>Write a Review</h3>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />
        <button onClick={() => {
          // Ideally, add logic to submit the review
          alert('Review submitted');
        }}>Submit Review</button>
      </div>
      <div className="quantity">
        <h3>Quantity</h3>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default BookDetails;
