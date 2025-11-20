import path from "node:path";
import { fileURLToPath } from "node:url";
import * as fs from "fs/promises";
import http from "node:http";
import getContent from "../getContentType.mjs";

const PORT = 8000;
const hostname = "127.0.0.1";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getFile(requestedUrl) {
  const fileName = requestedUrl === "/" ? "postForm.html" : requestedUrl;
  return path.join(__dirname, fileName);
}

const server = http.createServer(async (req, res) => {
  const urlObj = new URL(req.url, `http://${hostname}`);
  const requestedUrl = urlObj.pathname;
  const absolutePath = getFile(requestedUrl);
  const ext = path.extname(absolutePath);
  const contentType = getContent(ext);
  const content = await fs.readFile(absolutePath);

  res.statusCode = 200;
  res.setHeader("Content-Type", contentType);
  res.end(content);
});

server.listen(PORT, hostname, () => {
  console.log(`http://${hostname}:${PORT}`);
});
