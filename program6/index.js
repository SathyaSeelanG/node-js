const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Set up Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Home route with form
app.get('/', (req, res) => {
    res.send(`
        <form method="POST" action="/submit">
            <input type="text" name="name" placeholder="Name" required><br>
            <input type="email" name="email" placeholder="Email" required><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

// Handle form submission
app.post('/submit', (req, res) => {
    const data = req.body;
    fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 2));
    res.redirect('/display');
});

// Display saved data
app.get('/display', (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json')));
    res.render('display', { data });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
