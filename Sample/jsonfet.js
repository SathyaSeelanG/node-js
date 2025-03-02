import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;

// Fetch and return posts
app.get('/posts', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch posts" });
    }
});

// Fetch a single post by ID
app.get('/posts/:id', async (req, res) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch post" });
    }
});

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
