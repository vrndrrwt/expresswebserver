const express = require('express');
const app = express();
const port = 3000;

// Middleware to log the request method and URL
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

// Route for the /about path
app.get('/about', (req, res) => {
    res.send('This is the about page.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
