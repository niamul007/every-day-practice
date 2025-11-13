import http from "node:http";
import path, { normalize } from "node:path";
import { fileURLToPath } from "node:url";
import * as fs from "node:fs/promises";
import getContent from "../getContentType.mjs";
import { sendRes } from "./sendRes.js";
import { handleGet } from "./routeHandelers.js";

const PORT = 8000;
const hostname = "127.0.0.1";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = __dirname; // ✅ since server is already in /public

function getFile(requestedPath) {
  const cleanPath = requestedPath.replace(/^\/+/, ""); // ✅ remove leading slash
  const fileName = cleanPath === "" ? "horrorStory.html" : normalize(cleanPath);
  return path.join(PUBLIC_DIR, fileName);
}

const server = http.createServer(async (req, res) => {
  try {
    const urlObj = new URL(req.url, `http://${hostname}`);
    const requestedPath = urlObj.pathname;

    // ✅ handle API route first
    if (requestedPath === "/api" && req.method === "GET") {
      return await handleGet(res);
    }

    const absolutePath = getFile(requestedPath);
    const ext = path.extname(absolutePath);
    const contentType = getContent(ext);
    const content = await fs.readFile(absolutePath);

    sendRes(res, 200, contentType, content);
  } catch (error) {
    console.log("Error:", error.message);

    if (error.code === "ENOENT") {
      try {
        const notFoundPath = getFile("404.html");
        const content = await fs.readFile(notFoundPath);
        sendRes(res, 404, "text/html", content);
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
  console.log(`✅ Server running at http://${hostname}:${PORT}/`);
});
