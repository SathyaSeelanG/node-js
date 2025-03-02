const http = require('http'); // Import the HTTP module

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set response headers
    res.end('Hello, World!'); // Send response
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});



// Explanation:
// Import the http module → const http = require('http');
// Create a server using http.createServer():
// Takes a callback function with req (request) and res (response).
// res.writeHead(200, { 'Content-Type': 'text/plain' }) → Sets response headers.
// res.end('Hello, World!') → Sends the response to the client.
// Start the server with server.listen(3000) → Server runs on http://localhost:3000.