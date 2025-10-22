import dataBase from "./dataBase.mjs";
import http from "node:http";

const PORT = 8000;
const hostName = "127.0.0.1";

const server = http.createServer(async (req, res) => {
  const data = await dataBase();

  // Base API route
  if (req.url === "/api" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
    return;
  }

  // Dynamic continent route (like /api/asia or /api/north%20america)
  if (req.url.startsWith("/api/") && req.method === "GET") {
    const continentParam = decodeURIComponent(req.url.split("/").pop()); // ✅ handle spaces
    console.log(continentParam);

    const filterData = data.filter(
      (item) => item.continent.toLowerCase() === continentParam.toLowerCase()
    );

    if (filterData.length > 0) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(filterData));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "No data found for this continent" }));
    }
    return;
  }

  // Default 404
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "404 Route Not Found" }));
});

server.listen(PORT, hostName, () => {
  console.log(
    `Server running at http://${hostName}:${PORT}/api/north%20america`
  );
});
