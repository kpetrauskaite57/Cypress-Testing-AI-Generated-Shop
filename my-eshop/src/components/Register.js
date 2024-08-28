import React, { useState } from 'react';
import Modal from './Modal';
import '../style.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    address: '',
    city: '',
    postcode: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Check for empty fields
    Object.keys(formData).forEach(key => {
      if (!formData[key]) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });

    // Validate email format
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Validate password length
    if (formData.password && formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    // Validate phone number format
    // Phone number should start with +370 and be followed by exactly 8 digits
    if (formData.phone && !/^\+370\d{8}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be in the format: +370xxxxxxxx';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle successful registration
      setShowSuccess(true);
      // Clear form and errors after successful registration
      setFormData({
        name: '',
        surname: '',
        email: '',
        password: '',
        address: '',
        city: '',
        postcode: '',
        phone: '',
      });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={formData.surname}
          onChange={handleChange}
        />
        {errors.surname && <p className="error">{errors.surname}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <p className="error">{errors.address}</p>}

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <p className="error">{errors.city}</p>}

        <input
          type="text"
          name="postcode"
          placeholder="Postcode"
          value={formData.postcode}
          onChange={handleChange}
        />
        {errors.postcode && <p className="error">{errors.postcode}</p>}

        <input
          type="text"
          name="phone"
          placeholder="Phone Number (+370xxxxxxxx)"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <button type="submit">Register</button>
      </form>

      <Modal show={showSuccess} onClose={() => setShowSuccess(false)} title="Registration Successful">
        <p>Your account has been created successfully!</p>
      </Modal>
    </div>
  );
}

export default Register;
