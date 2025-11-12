import path from "node:path";

const filePath = path.join("public", "images", "ghotbq.png");

console.log("Joined path:", filePath);
console.log("Absolute path:", path.resolve(filePath));
console.log("Directory name:", path.dirname(filePath));
console.log("File name:", path.basename(filePath));
console.log("Extension:", path.extname(filePath));
