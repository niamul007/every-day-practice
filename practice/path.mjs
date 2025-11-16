// 
import path from "path";
import { fileURLToPath } from "url";
import http from "node:http";
import * as fs from "node:fs/promises";
import getContent from "../getContentType.mjs";

const PORT = 8000;
const hostname = "127.0.0.1";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base folder → public
const publicDir = path.join(__dirname, "..", "public");

function getFilePath(requestedPath) {
  const fileName =
    requestedPath === "/" ? "404.html" : requestedPath;

  // Full path inside public
  return path.join(publicDir, fileName);
}

const server = http.createServer(async (req, res) => {
  try {
    const urlObj = new URL(req.url, `http://${hostname}`);
    const requestedPath = urlObj.pathname;

    const absolutePath = getFilePath(requestedPath);

    const ext = path.extname(absolutePath);
    const contentType = getContent(ext);
    console.log(absolutePath)

    const content = await fs.readFile(absolutePath);

    res.statusCode = 200;
    res.setHeader("Content-Type", contentType);
    res.end(content);
  } catch (err) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("File Not Found");
  }
});

server.listen(PORT, hostname, () => {
  console.log(`Server running → http://${hostname}:${PORT}`);
});
