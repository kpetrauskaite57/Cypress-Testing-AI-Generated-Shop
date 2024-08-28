import React, { useState } from 'react';
import './Login.css';  // Ensure this path is correct

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};

    // Check if fields are empty
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';

    // Validate email format
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    // Dummy check for user existence and password
    // Replace with actual authentication logic
    if (email && password && !validateCredentials(email, password)) {
      newErrors.general = 'Invalid email or password';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const validateCredentials = (email, password) => {
    // Replace this logic with actual authentication
    // For demo purposes, assume these are the correct credentials
    return email === 'user@example.com' && password === 'password123';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage('Congratulations! You have successfully logged in.');
      // Clear form and errors after successful login
      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
          />
          <label htmlFor="email">Email</label>
        </div>
        {errors.email && <p className="error">{errors.email}</p>}

        <div className="form-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
          />
          <label htmlFor="password">Password</label>
        </div>
        {errors.password && <p className="error">{errors.password}</p>}
        
        {errors.general && <p className="error">{errors.general}</p>}
        
        <button type="submit">Login</button>
      </form>
      
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
}

export default Login;
