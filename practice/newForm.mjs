import path from "node:path";
import { fileURLToPath } from "node:url";
import * as fs from "fs/promises";
import http, { get } from "node:http";
import getContent from "../getContentType.mjs";
import e from "express";

const PORT = 8000;
const hostname = "127.0.0.1";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const publicDir = path.join(__dirname);

function getFile(requestedUrl) {
  const fileName = requestedUrl === "/" ? "postForm.html" : requestedUrl;
  return path.join(__dirname, fileName);
}

const server = http.createServer(async (req, res) => {
  const urlObj = new URL(req.url, `http://${hostname}`);
  const requestedUrl = urlObj.pathname;

  if (req.url === "/submit" && req.method === "POST") {
    let body = "";
    for await (const chunk of req) {
      body += chunk;
    }

    const params = new URLSearchParams(body);
    const obj = Object.fromEntries(params);
    console.log("form data:" + obj);

    res.statusCode = 201;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ status: "success", received: obj }));
    return;
  }

  const absolutePath = getFile(requestedUrl);
  const ext = path.extname(absolutePath);
  const contentType = getContent(ext);
  try {
    const content = await fs.readFile(absolutePath);
    res.statusCode = 200;
    res.setHeader("Content-Type", contentType);
    res.end(content);
  } catch (err) {
    res.statusCode = 404;
    res.end("File not found");
  }
});

server.listen(PORT,hostname,()=>{
    console.log(`http://${hostname}:${PORT}`)
})