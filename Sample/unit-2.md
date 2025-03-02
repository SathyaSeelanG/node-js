Introduction to Web Servers with Node.js
----------------------------------------------------------------------------


what is Node.js
----------------------------------------------------------------------------

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side, which makes it ideal for building scalable and high-performance web applications.

Key Features of Node.js
✅ Event-Driven – Node.js is event-driven, which means it is non-blocking and can handle a large number of concurrent connections.
✅ Asynchronous – Node.js uses an asynchronous event-driven architecture, which allows it to handle a large number of concurrent connections efficiently.
✅ Fast – Node.js is fast and efficient, making it suitable for real-time applications.
✅ Scalable – Node.js can handle a large number of concurrent connections, making it suitable for building scalable and high-performance web applications.
✅ Easy to Learn – Node.js has a simple and easy-to-learn syntax, making it suitable for beginners and experienced developers alike.
✅ Open Source – Node.js is an open-source project, which means it is free to use and can be modified by anyone.

Install Node.js
npm install node
What is a Web Server?
A web server is software that handles client requests and serves web pages or data over the internet. In Node.js, we can create a simple web server using the built-in HTTP module without requiring additional software like Apache or Nginx.

1. Creating a Basic Web Server in Node.js
Node.js provides the http module to create a web server that listens for incoming HTTP requests.

Installation
No additional installation is required since the http module is built into Node.js.

Basic Example: A Simple Web Server


const http = require('http'); // Import the HTTP module

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set response headers
    res.end('Hello, World!'); // Send response
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
Explanation:
Import the http module → const http = require('http');
Create a server using http.createServer():
Takes a callback function with req (request) and res (response).
res.writeHead(200, { 'Content-Type': 'text/plain' }) → Sets response headers.
res.end('Hello, World!') → Sends the response to the client.
Start the server with server.listen(3000) → Server runs on http://localhost:3000.


JavaScript on the Desktop with Node.js
----------------------------------------------------------------------------
Introduction
Traditionally, JavaScript was used only in web browsers. However, with Node.js, JavaScript can now run on desktop environments without a browser. This allows JavaScript to perform server-side tasks, interact with the file system, run scripts, and even create full-fledged desktop applications.

1. Running JavaScript on the Desktop with Node.js
Unlike in the browser, where JavaScript is used for frontend development, in Node.js, JavaScript can interact directly with the operating system.

NPM
----------------------------------------------------------------------------

Node Package Manager (NPM) - Explained with Examples
Introduction
NPM (Node Package Manager) is the default package manager for Node.js. It is used to install, update, and manage JavaScript packages (libraries) from the NPM registry.

NPM allows developers to:

Install third-party libraries for projects.
Manage dependencies for Node.js applications.
Run scripts for building, testing, and deployment.
Create and publish custom packages.


express framework
----------------------------------------------------------------------------

Introduction to the Express Framework in Node.js 🚀
What is Express.js?
Express.js is a fast, unopinionated, and minimalist web framework for Node.js. It simplifies building web applications and APIs by handling routing, middleware, and HTTP requests efficiently.

Key Features of Express.js
✅ Routing – Define routes for handling HTTP requests (GET, POST, PUT, DELETE).
✅ Middleware – Use built-in and custom middleware for processing requests.
✅ Template Engines – Supports rendering dynamic views using EJS, Pug, etc.
✅ Static File Serving – Easily serve HTML, CSS, images, and JavaScript files.
✅ REST API Support – Build APIs with JSON responses for web and mobile apps.


to install express
npm init -y
npm install express



templating
----------------------------------------------------------------------------

Introduction to Templating in Node.js
What is Server-Side Rendering (SSR)?
Server-Side Rendering (SSR) is the process of generating HTML on the server before sending it to the client. This improves SEO, performance, and initial page load speed. In Node.js, templating is typically done using a template engine like EJS, Pug, or Handlebars.
What is Templating?
Templating is the process of generating dynamic content by combining data with pre-defined templates. In Node.js, templating is typically done using a template engine like EJS, Pug, or Handlebars.
or 
Templating engines allow us to embed dynamic data into HTML using placeholders, making it easier to create dynamic web pages. Some popular templating engines include:

Key Features of Templating
✅ Dynamic Content – Templating allows you to generate dynamic content based on data.
✅ Reusability – Templating allows you to reuse the same template for multiple purposes.
✅ Customization – Templating allows you to customize the look and feel of your web pages.
✅ Security – Templating helps prevent cross-site scripting (XSS) attacks by escaping HTML tags.   

Install Express & EJS
npm init -y
npm install express ejs


ejs is embedded javascript template engine
----------------------------------------------------------------------------

Introduction to EJS
EJS is a simple and powerful template engine for Node.js. It allows you to embed JavaScript code directly into your HTML templates, making it easier to generate dynamic content.

Key Features of EJS
✅ Embedded JavaScript – EJS allows you to embed JavaScript code directly into your HTML templates.
✅ Templating Engine – EJS is a templating engine that allows you to generate dynamic content based on data.
✅ Fast Rendering – EJS is fast and efficient, making it suitable for real-time applications.
✅ Security – EJS helps prevent cross-site scripting (XSS) attacks by escaping HTML tags.

Install EJS
npm install ejs



 Fetching JSON from Express. 
 ---------------------------------------------------------------------------------
JSON in Express?
JSON (JavaScript Object Notation) is a lightweight format for sending and receiving structured data. Express.js makes it easy to create REST APIs that return JSON responses.

Install  express
npm init -y
npm install express



josnplace
----------------------------------------------------------------------------

Introduction to JSON
JSON is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999. JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.

Key Features of JSON
✅ Human-Readable – JSON is easy for humans to read and write.
✅ Machine-Readable – JSON is easy for machines to parse and generate.
✅ Language Independent – JSON is based on a subset of the JavaScript Programming Language.
✅ Supports Data Interchange – JSON is a text format that is completely language independent.
✅ Supports Data Validation – JSON supports data validation using JSON Schema.
✅ Supports Data Compression – JSON supports data compression using gzip and deflate.

Install JSON
npm install json
npm init -y
npm install express node-fetch




<!-- https://onecompiler.com/nodejs/43a7fschv -->