import { error } from "node:console";
import dataBase from "./dataBase.mjs";
import http from "node:http";

const PORT = 8000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  if (req.url === "/api" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, I am dead");
  }else{
    res.end({
        error :` you are getting an ${error.message}`,
        status: 404,
    })
  }
});

server.listen(PORT, hostName, () =>
  console.log(`It's working and it's url is http://${hostName}:${PORT}/api`)
);
