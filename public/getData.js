// public/getData.js
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as fs from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function getData() {
  try {
    const filePath = path.join(__dirname, "data.json"); // ✅ direct reference
    const data = await fs.readFile(filePath, "utf-8");
    const parsedData = JSON.parse(data);

    console.log("Loaded JSON data:", parsedData);
    return parsedData;
  } catch (error) {
    console.error("Error reading JSON file:", error.message);
    return [];
  }
}
