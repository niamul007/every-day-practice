import dataBase from "./dataBase.mjs";
import http from "node:http";
import sendJSONResponse from "./sendJsonRes.mjs";
import getDataByPathParams from "./getDataByPathParams.mjs";

const PORT = 8000;
const hostname = "127.0.0.1";

const server = http.createServer(async (req, res) => {
  try {
    const destination = await dataBase();

    if (req.url === "/api" && req.method === "GET") {

      sendJSONResponse(res, 200, destination);
    } 
    
    else if (req.url.startsWith("/api/continent/") && req.method === "GET") {
      const continentEncoded = req.url.split("/").pop();
      const continent = decodeURIComponent(continentEncoded);
      const filterContinent = getDataByPathParams(destination,'continent',continent)
      sendJSONResponse(res, 200, filterContinent);
    } 

    else if (req.url.startsWith("/api/country/") && req.method === "GET") {
      const countryEncoded = req.url.split("/").pop();
      const country = decodeURIComponent(countryEncoded);
      const filterCountry = getDataByPathParams(destination,'country',country)
      sendJSONResponse(res, 200, filterCountry);
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
