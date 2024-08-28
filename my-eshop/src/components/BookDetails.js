import React, { useState } from 'react';

function BookDetails({ book, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [newReview, setNewReview] = useState("");

  const handleAddToCart = () => {
    addToCart(book, quantity);
  };

  const handleAddReview = () => {
    if (newReview) {
      book.reviews.push({ user: "Anonymous", comment: newReview, rating: 5 });
      setNewReview("");
    }
  };

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Year:</strong> {book.year}</p>
      <p>{book.description}</p>
      <p><strong>Price:</strong> ${book.price}</p>

      <div className="cart-options">
        <label>Quantity: </label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>

      <div className="reviews">
        <h3>Customer Reviews</h3>
        {book.reviews.map((review, index) => (
          <div key={index}>
            <p><strong>{review.user}:</strong> {review.comment}</p>
          </div>
        ))}
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write a review..."
        ></textarea>
        <button onClick={handleAddReview}>Submit Review</button>
      </div>
    </div>
  );
}

export default BookDetails;
