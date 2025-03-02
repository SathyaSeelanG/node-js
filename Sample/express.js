const express = require('express'); // Import Express
const app = express(); // Create an Express app

// Define a route for the homepage
app.get('/', (req, res) => {
    res.send('Hello, Express.js!');
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
// Explanation:
// Import Express → const express = require('express');
// Create an Express app → const app = express();
// Define a route for the homepage → app.get('/', (req, res) => {
// res.send('Hello, Express.js!');
// });
// Start the server on port 3000 → app.listen(3000, () => {
// console.log('Server running at http://localhost:3000');