const express = require('express');
const app = express();

// Sample JSON Data
const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" }
];

// API route to fetch JSON data
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Start the server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
