const express = require('express');
const router = express.Router();

// Import routes
const authRoutes = require('./auth');
const userRoutes = require('./users');
const productRoutes = require('./products');
const cartRoutes = require('./cart');
const orderRoutes = require('./orders');

// Use routes
router.use('/auth', authRoutes);         // Routes for authentication (login, register, etc.)
router.use('/users', userRoutes);        // Routes for user management (profile, etc.)
router.use('/products', productRoutes);  // Routes for product management (list, detail, etc.)
router.use('/cart', cartRoutes);         // Routes for cart management (add to cart, view cart, etc.)
router.use('/orders', orderRoutes);      // Routes for order management (place order, view orders, etc.)

module.exports = router;
