import http from "node:http";
import path from 'node:path';

// 1. Define constants for server setup
const PORT = 8000;
const hostname = "127.0.0.1";

// 2. Get the directory of the current script (only works in ES Modules)
const currentDirectory = import.meta.dirname;

/**
 * Calculates the absolute path to a hypothetical file.
 * We are simulating finding the path to 'public/index.html'
 * from the directory where this server file is running.
 * * @param {string} baseDir - The directory path from import.meta.dirname
 * @returns {string} The full, absolute file path.
 */
function getFilePath(baseDir) {
    // path.join correctly handles different operating system separators (like / or \)
    const filePath = path.join(baseDir, 'public', 'index.html');
    return filePath;
}


const server = http.createServer((req, res) => {
    // 3. Calculate the path within the request handler
    const absolutePath = getFilePath(currentDirectory);

    // 4. Set headers to indicate a successful JSON response
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;

    // 5. Build the response object and convert it to a JSON string
    const responseBody = JSON.stringify({
        message: "Path Calculation Practice Success!",
        // The calculated path that the user is trying to find:
        pathName: absolutePath
    });

    res.end(responseBody);
});

server.listen(PORT, hostname, () =>
  console.log(`Server is running. Test URL: http://${hostname}:${PORT}`)
);
