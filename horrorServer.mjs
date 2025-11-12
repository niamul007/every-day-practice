import http from "node:http";
import path, { normalize } from "node:path";
import { fileURLToPath } from "node:url";
import * as fs from "node:fs/promises";
import getContent from "./getContentType.mjs";

const PORT = 8000;
const hostname = "127.0.0.1";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, "public");

function getFile(requestedPath) {
  const fileName =
    requestedPath === "/" ? "horrorStory.html" : normalize(requestedPath);
  const absolutePath = path.join(PUBLIC_DIR, fileName);
  return absolutePath;
}

const server = http.createServer(async (req, res) => {
  try {
    const urlObj = new URL(req.url, `http://${hostname}`);
    const requestedPath = urlObj.pathname;
    const absolutePath = getFile(requestedPath);
    const ext = path.extname(absolutePath);
    const contentType = getContent(ext);
    const content = await fs.readFile(absolutePath);

    res.statusCode = 200;
    res.setHeader("Content-Type", contentType);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(content);
  } catch (error) {
    console.log("Error:", error.message);

    // Handle "file not found" error (ENOENT)
    if (error.code === "ENOENT") {
      try {
        const notFoundPath = getFile("404.html");
        const content = await fs.readFile(notFoundPath);
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.end(content);
      } catch {
        res.statusCode = 404;
        res.end("404 Not Found");
      }
    } else {
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  }
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}`);
});
