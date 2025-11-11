// import http from "node:http";
// import path from "node:path";

// const PORT = 8000;
// const hostname = "127.0.0.1";
// const __dirname = import.meta.dirname;

// const server = http.createServer((req, res) => {
//     const urlObj = new URL(req.url,`http://${req.headers.host}`)
//     const queryObj = Object.fromEntries(urlObj.searchParams.entries())
//   if (req.method === "GET") {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "application/json");
//     res.end(JSON.stringify({ message: "Hello vai lok" ,queryObj}));
//   }
// });

// server.listen(PORT, hostname, () => {
//   console.log(`Server running at http://${hostname}:${PORT}/`);
// });


// senior level code and must be opracticed 

import http from "node:http";
import { fileURLToPath } from "node:url";
import path from "node:path";

const PORT = 8000;
const hostname = "127.0.0.1";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
  // Log request
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

  // Default headers
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Safely get host
  const host = req.headers.host || `${hostname}:${PORT}`;

  // Handle invalid URL
  let urlObj;
  try {
    urlObj = new URL(req.url, `http://${host}`);
  } catch (err) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: "Invalid URL" }));
    return;
  }

  // Parse query params
  const queryObj = Object.fromEntries(urlObj.searchParams.entries());

  // Route by method
  if (req.method === "GET") {
    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: "Hello vai lok",
        query: queryObj,
        path: urlObj.pathname,
      })
    );
  } else {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: "Method Not Allowed" }));
  }
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});