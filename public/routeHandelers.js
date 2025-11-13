// public/routeHandelers.js
import { getData } from "./getData.js";
import { sendRes } from "./sendRes.js";

export async function handleGet(res) {
  const data = await getData(); // load from data.json
  const jsonData = JSON.stringify(data);

  sendRes(res, 200, "application/json", jsonData);
}
