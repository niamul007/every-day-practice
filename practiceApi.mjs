import http from "node:http";
import path from "node:path";

const PORT = 8000;
const hostname = "127.0.0.1";
const __dirname = import.meta.dirname;

function getFilePath(baseDir) {
  const filePath = path.join(baseDir, "public", "index.html");
  return filePath;
}

const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host}`);
  const queryObj = Object.fromEntries(urlObj.searchParams.entries());
  if (urlObj.pathname === "/api" && req.method === "GET") {

    const absolutePath = getFilePath(__dirname);
    
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(`Hello there!\nURL object: ${JSON.stringify(queryObj, null, 2)}\nThe file path:${JSON.stringify(absolutePath)}`);
  }
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/api?country=india`);
});
