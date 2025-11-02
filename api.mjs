import dataBase from "./dataBase.mjs";
import http from "node:http";
import sendJSONResponse from "./sendJsonRes.mjs";
import getDataByPathParams from "./getDataByPathParams.mjs";
import getQueryParams from "./getQueryParams.mjs";



const PORT = 8000;
const hostname = "127.0.0.1";

const server = http.createServer(async (req, res) => {
  try {

    const destination = await dataBase();
    const urlObj = new URL(req.url, `http://${req.headers.host}`);
    const queryObj = Object.fromEntries(urlObj.searchParams.entries());

    if (urlObj.pathname === "/api" && req.method === "GET") {
      const filteredData = getQueryParams(destination, queryObj);
      console.log(queryObj); // Now prints { country: 'norway', is_open_to_public: 'true' }
      sendJSONResponse(res, 200, filteredData);
    } 
    else if (req.url.startsWith("/api/continent/") && req.method === "GET") {
      const continentEncoded = req.url.split("/").pop();
      const continent = decodeURIComponent(continentEncoded);
      const filterContinent = getDataByPathParams(
        destination,
        "continent",
        continent
      );
      sendJSONResponse(res, 200, filterContinent);
    } 
    else if (req.url.startsWith("/api/country/") && req.method === "GET") {
      const countryEncoded = req.url.split("/").pop();
      const country = decodeURIComponent(countryEncoded);
      const filterCountry = getDataByPathParams(
        destination,
        "country",
        country
      );
      sendJSONResponse(res, 200, filterCountry);
    } 
    else {
      sendJSONResponse(res, 404, {
        error: "not found",
        message: "The requested route does not exist",
      });
    }
  } 
  catch (error) {
    console.error(error.message);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: error.message }));
  }
});

server.listen(PORT, hostname, () =>
  console.log(
    `your url is http://${hostname}:${PORT}/api/continent/asia  \n for country : http://${hostname}:${PORT}/api/country/japan\n http://${hostname}:${PORT}/api`
  )
);
