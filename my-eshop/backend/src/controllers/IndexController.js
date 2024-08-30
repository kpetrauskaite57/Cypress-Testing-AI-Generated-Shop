const path = require('path');
const fs = require('fs');

// Handles the root route, typically serves a basic page or information
exports.getHome = (req, res) => {
    res.send('Welcome to the API! Use the endpoints to interact with the system.');
};

// Handles a health check route
exports.getHealth = (req, res) => {
    res.status(200).json({ status: 'OK', message: 'API is running' });
};

// Serve a static file, like a documentation or index.html
exports.getStaticFile = (req, res) => {
    const filePath = path.join(__dirname, '..', 'public', 'index.html'); // Adjust path as needed

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading the file');
        }
        res.send(data);
    });
};
