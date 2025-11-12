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
import * as fs from "node:fs/promises";
import getContent from "./getContentType.mjs";

const PORT = 8000;
const HOSTNAME = "127.0.0.1";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, "public");

// Normalize and secure file path
function getSecurePath(requestedPath) {
  const normalized = path.normalize(requestedPath).replace(/^(\.\.[\/\\])+/, "");
  const fileName = requestedPath === "/" ? "index.html" : normalized;
  const absolutePath = path.join(PUBLIC_DIR, fileName);

  // Prevent directory traversal
  if (!absolutePath.startsWith(PUBLIC_DIR)) {
    throw new Error("Forbidden path");
  }

  return absolutePath;
}

const server = http.createServer(async (req, res) => {
  const log = () => console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  log();

  const host = req.headers.host || `${HOSTNAME}:${PORT}`;
  let url;

  try {
    // Parse URL first
    url = new URL(req.url, `http://${host}`);
    const requestedPath = url.pathname;
    const absolutePath = getSecurePath(requestedPath);

    // Check if file exists
    await fs.access(absolutePath);
    const ext = path.extname(absolutePath);
    const contentType = getContent(ext) || "application/octet-stream";
    const content = await fs.readFile(absolutePath);

    // Only allow GET
    if (req.method !== "GET") {
      res.statusCode = 405;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Method Not Allowed" }));
      return;
    }

    // Success: Serve file
    res.statusCode = 200;
    res.setHeader("Content-Type", contentType);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(content);

  } catch (err) {
    // 404: File not found
    if (err.code === "ENOENT") {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Not Found" }));
      return;
    }

    // 403: Path traversal
    if (err.message === "Forbidden path") {
      res.statusCode = 403;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Forbidden" }));
      return;
    }

    // 400: Invalid URL
    if (!url) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Invalid URL" }));
      return;
    }

    // 500: Unexpected error
    console.error("Server error:", err);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Internal Server Error" }));
  }
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});