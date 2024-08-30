const express = require('express');
const connectDB = require('./config/db'); // Assuming you're using a separate config for DB connection
const routes = require('./routes/index'); // Import the routes

const app = express();

// Connect to the database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api', routes); // All routes will be prefixed with /api

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
