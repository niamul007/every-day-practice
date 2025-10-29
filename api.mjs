import dataBase from "./dataBase.mjs";
import http from "node:http";

const PORT = 8000;
const hostname = "127.0.0.1";

const server = http.createServer(async (req, res) => {
  try {
    const destination = await dataBase();

    if (req.url === "/api" && req.method === "GET") {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(JSON.stringify(destination));
    } else if (req.url.startsWith("/api/continent/") && req.method === "GET") {
      const continentEncoded = req.url.split("/").pop();
      const continent = decodeURIComponent(continentEncoded);
      const filterContinent = destination.filter(
        (item) =>
          item.continent.toLocaleLowerCase() === continent.toLocaleLowerCase()
      );
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(JSON.stringify(filterContinent));
    } else if (req.url.startsWith("/api/country/") && req.method === "GET") {
      const countryEncoded = req.url.split("/").pop();
      const country = decodeURIComponent(countryEncoded);
      const filterCountry = destination.filter(
        (item) =>
          item.country.toLocaleLowerCase() === country.toLocaleLowerCase()
      );
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(JSON.stringify(filterCountry));
    }
  } catch (error) {
    console.error(error.message);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: error.message }));
  }
});

server.listen(PORT, hostname, () =>
  console.log(
    `your url is http://${hostname}:${PORT}/api/continent/asia  \n for country : http://${hostname}:${PORT}/api/country/japan`
  )
);
