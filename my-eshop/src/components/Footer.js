import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubscription = () => {
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      alert('Subscribed successfully!');
    }
  };

  return (
    <footer>
      <div className="footer-links">
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
        <a href="/faq">FAQ</a>
      </div>
      <div className="newsletter">
        <h4>Subscribe to our Newsletter</h4>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
        />
        <button onClick={handleSubscription}>Subscribe</button>
        {error && <p>{error}</p>}
      </div>
    </footer>
  );
}

export default Footer;
