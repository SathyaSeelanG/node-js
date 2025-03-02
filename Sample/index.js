const { app, BrowserWindow } = require('electron');

let win;

app.whenReady().then(() => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // win.loadURL('https://www.sathyaseelan.in'); // Load a webpage
    win.loadURL('https://www.google.com'); // Load a webpage
});



// Explanation:
// app.whenReady() → Waits for Electron to be ready to create a window.
// win = new BrowserWindow() → Creates a new window.
// win.loadURL('https://www.google.com') → Loads a webpage. 

// npm install electron --save-dev //→ Installs Electron.
// npx electron . // Run the Electron app.