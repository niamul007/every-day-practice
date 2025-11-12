import path from "node:path";
import { fileURLToPath } from "node:url";
const filePath = path.join("public", "text/html", "index.html");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, "public");

console.log(PUBLIC_DIR);


// console.log("Joined path:", filePath);
// console.log("Absolute path:", path.resolve(filePath));
// console.log("Directory name:", path.dirname(filePath));
// console.log("File name:", path.basename(filePath));
// console.log("Extension:", path.extname(filePath));
