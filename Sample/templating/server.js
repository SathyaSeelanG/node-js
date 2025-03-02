const express = require('express');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Define a route to render an EJS template
app.get('/', (req, res) => {
    const data = { title: "Home Page", message: "Welcome to Server-Side Rendering with EJS!" };
    res.render('index', data);
});

// Start the server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
