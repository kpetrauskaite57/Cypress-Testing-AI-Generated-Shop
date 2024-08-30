import React, { useState } from 'react';
import '../styles/Footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            setMessage('Email cannot be empty!');
        } else if (!emailRegex.test(email)) {
            setMessage('Please enter a valid email address!');
        } else {
            // Simulate successful subscription
            setMessage('Congratulations! You have successfully subscribed.');
            setEmail('');
        }
    };

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
                    <h4>Subscribe to our Newsletter</h4>
                    <p>Get exclusive offers, news, and more!</p>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input type="submit" value="Subscribe" />
                    </form>
                    {message && <p className="message">{message}</p>}
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Bookstore. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
