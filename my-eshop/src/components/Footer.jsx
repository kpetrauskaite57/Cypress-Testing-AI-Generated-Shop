import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>About Us</h4>
          <p>
            We are a leading online bookstore offering a wide range of books across all genres. 
            Our mission is to promote the love of reading by providing books that suit every reader's taste.
          </p>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Email: support@bookstore.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Book St, Reading City, RW 4567</p>
        </div>
        <div className="footer-column">
          <h4>FAQ</h4>
          <p><a href="/faq">Shipping Information</a></p>
          <p><a href="/faq">Return Policy</a></p>
          <p><a href="/faq">Order Tracking</a></p>
        </div>
        <div className="footer-column footer-newsletter">
          <h4>Newsletter</h4>
          <form>
            <input type="email" placeholder="Enter your email" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Bookstore. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
