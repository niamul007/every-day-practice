import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express'; // 💡 New: Imported Express

const PORT = 8000;
const hostname = '127.0.0.1';

// Standard way to get __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const directory = path.join(__dirname, 'public'); // 💡 Important: Point to a static 'public' folder

// 1. Initialize the Express Application
const app = express(); 

// --- Express Middleware Setup ---
// 2A. Static File Serving (for CSS, client-side JS, images)
// This will serve files from the 'public' folder when a path is requested
app.use(express.static(directory)); 
console.log(`Serving static files from: ${directory}`);

// 2B. Define a Simple Dynamic Route
// Handles GET requests to /api/greeting
app.get('/api/greeting', (req, res) => {
    // Get the optional 'name' query parameter (e.g., /api/greeting?name=Sam)
    const userName = req.query.name || 'World';
    const currentTime = new Date().toLocaleTimeString();

    // Send back a dynamic JSON response
    res.status(200).json({ 
        greeting: `Hello, ${userName}!`,
        serverTime: currentTime,
        message: 'This content was generated dynamically by Express.'
    });
});
// 

// 2C. Handle the Root Path (Your index.html)
// Express will typically serve index.html automatically if it's in the static directory.
// You can override this to serve an EJS template or custom dynamic content later.
app.get('/', (req, res) => {
    // Because of app.use(express.static()), this might be redundant if 'index.html' exists.
    // However, here we could render a view or send a message.
    res.send('Welcome to the dynamic Node.js server!');
});

// 3. Start the Server
app.listen(PORT, hostname, () => {
    console.log(`Express server running at http://${hostname}:${PORT}`);
    console.log(`Test dynamic route: http://${hostname}:${PORT}/api/greeting?name=Teacher`);
});