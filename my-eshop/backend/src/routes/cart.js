const express = require('express');
const { check, validationResult } = require('express-validator');
const authMiddleware = require('../middleware/auth'); // Middleware to ensure user is authenticated

const User = require('../models/User'); // Import User model to access the user's cart
const Product = require('../models/Product'); // Import Product model to access product details

const router = express.Router();

// @route   GET /api/cart
// @desc    Get current user's cart
// @access  Private
router.get('/', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('cart.product', 'name price');
    res.json(user.cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST /api/cart
// @desc    Add an item to the cart
// @access  Private
router.post(
  '/',
  [
    authMiddleware,
    check('productId', 'Product ID is required').not().isEmpty(),
    check('quantity', 'Quantity is required and should be a number').isInt({ min: 1 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { productId, quantity } = req.body;

    try {
      const user = await User.findById(req.user.id);

      // Check if the product exists
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ msg: 'Product not found' });
      }

      // Check if the product is already in the cart
      const cartItem = user.cart.find(item => item.product.toString() === productId);

      if (cartItem) {
        // Update the quantity if the product is already in the cart
        cartItem.quantity += quantity;
      } else {
        // Add new item to the cart
        user.cart.push({ product: productId, quantity });
      }

      await user.save();
      res.json(user.cart);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   PUT /api/cart/:itemId
// @desc    Update the quantity of an item in the cart
// @access  Private
router.put(
  '/:itemId',
  [
    authMiddleware,
    check('quantity', 'Quantity is required and should be a number').isInt({ min: 1 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { quantity } = req.body;

    try {
      const user = await User.findById(req.user.id);

      // Find the cart item by its ID
      const cartItem = user.cart.id(req.params.itemId);

      if (!cartItem) {
        return res.status(404).json({ msg: 'Cart item not found' });
      }

      // Update the quantity
      cartItem.quantity = quantity;

      await user.save();
      res.json(user.cart);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   DELETE /api/cart/:itemId
// @desc    Remove an item from the cart
// @access  Private
router.delete('/:itemId', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    // Find the cart item by its ID and remove it
    const cartItem = user.cart.id(req.params.itemId);
    if (!cartItem) {
      return res.status(404).json({ msg: 'Cart item not found' });
    }

    cartItem.remove();

    await user.save();
    res.json(user.cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
