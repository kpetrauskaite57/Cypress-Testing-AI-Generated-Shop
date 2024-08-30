const express = require('express');
const router = express.Router();
const { getBooks, getBookById, addBook, updateBook, deleteBook } = require('../controllers/bookController');

router.get('/', getBooks); // GET all books
router.get('/:id', getBookById); // GET book by ID
router.post('/', addBook); // POST a new book
router.put('/:id', updateBook); // UPDATE a book by ID
router.delete('/:id', deleteBook); // DELETE a book by ID

module.exports = router;
