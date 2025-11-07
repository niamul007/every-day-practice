import http from "node:http";
import path from "node:path";
import * as fs from 'node:fs/promises';
// FIX 1: Uncommented and corrected the import name to match the default export
import getContent from "./getContentType.mjs";

const hostname = "127.0.0.1";
const __dirname = import.meta.dirname;
const PORT = 8000;
const PUBLIC_DIR = path.join(__dirname, "public"); // Define public directory once

/**
 * Calculates the absolute path based on the requested URL.
 * FIX 2: Added 'requestUrl' parameter to receive the path from the request.
 * @param {string} requestUrl The path portion of the URL (req.url).
 * @returns {string} The full absolute path to the requested file in the 'public' directory.
 */
function getFilePath(requestUrl) {
    // Determine the file name, defaulting to 'index.html' for the root path '/'
    const fileName = requestUrl === '/' ? 'index.html' : requestUrl;
    
    // Safely combine the public directory path with the file name
    const absolutePath = path.join(PUBLIC_DIR, fileName);
    
    return absolutePath;
}


const server = http.createServer(async(req, res) => {
    const urlObj = new URL(req.url, `http://${req.headers.host}`);
    const requestedPath = urlObj.pathname;
    
    // FIX 4: Removed the restrictive 'urlObj.pathname === "/api"' condition.
    // The server now attempts to serve any GET request as a static file.
    if (req.method === "GET") {
        try {
            // Calculate the absolute path, passing the requested URL
            const absolutePath = getFilePath(requestedPath);
            
            // FIX 3: Calculate extension and content type based on the single 'absolutePath' variable
            const ext = path.extname(absolutePath);
            const contentType = getContent(ext);

            // Read the file content (without utf8 encoding to support images/binary)
            const content = await fs.readFile(absolutePath); 

            // Send response
            res.setHeader("Content-Type", contentType);
            res.statusCode = 200;
            res.end(content);
            
        } catch (error) {
            // Robust error handling for File Not Found
            if (error.code === 'ENOENT') {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end(`404 Not Found: Could not locate ${requestedPath}`);
            } else {
                console.error('Server Error:', error);
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('500 Internal Server Error');
            }
        }
    } else {
        // Method not allowed (e.g., POST, PUT)
        res.writeHead(405, {'Content-Type': 'text/plain'});
        res.end('405 Method Not Allowed');
    }

});

server.listen(PORT, hostname, () => {
  console.log(`Server is now a dynamic static file server, running at http://${hostname}:${PORT}/`);
});