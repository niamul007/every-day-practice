import dataBase from "./dataBase.mjs";
import http from "node:http";

const PORT = 8000;
const hostname = "127.0.0.1";

const server = http.createServer(async (req, res) => {
  try {
    if (req.url === "/api" && req.method === "GET") {
      const destination = await dataBase();
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(JSON.stringify(destination));
    }
  } catch (error) {
    console.error(error.message);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: error.message }));
  }
});

server.listen(PORT, hostname, () =>
  console.log(`your url is http://${hostname}:${PORT}/api`)
);
