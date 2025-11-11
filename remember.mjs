import http from "node:http";
import path from "node:path";

const PORT = 8000;
const hostname = "127.0.0.1";
const __dirname = import.meta.dirname;

const server = http.createServer((req, res) => {
    const urlObj = new URL(req.url,`http://${req.headers.host}`)
    const queryObj = Object.fromEntries(urlObj.searchParams.entries())
  if (req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Hello vai lok" ,queryObj}));
  }
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
