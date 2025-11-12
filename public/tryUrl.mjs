// import path from "node:path";
// import { fileURLToPath } from "node:url";
// const filePath = path.join("public", "text/html", "index.html");
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const PUBLIC_DIR = path.join(__dirname, "public");

// console.log(PUBLIC_DIR);


// console.log("Joined path:", filePath);
// console.log("Absolute path:", path.resolve(filePath));
// console.log("Directory name:", path.dirname(filePath));
// console.log("File name:", path.basename(filePath));
// console.log("Extension:", path.extname(filePath));

// import path from "path";

// const filePath = path.join('public','app.js');
// console.log("joined path:",filePath);
// console.log("absolute Path:", path.resolve(filePath));
// console.log("Directory name:", path.dirname(filePath));
// console.log("File name:", path.basename(filePath));
// console.log("Extention name:", path.extname(filePath))
// const messyPath = 'src//js/../app.js';
// const normalizedPath = path.normalize(messyPath);
// console.log("Joined Path:",normalizedPath)


// import { fileURLToPath } from "url";
// import { normalize } from "node:path";
// import path from "node:path";

// // Get current file path and directory
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Public folder
// const PUBLIC_DIR = path.join(__dirname, 'src'); 
// console.log("PUBLIC_DIR:", PUBLIC_DIR);

// function url(requestedUrl){
//     const fileName = requestedUrl === '/' ? 'app.js' : normalize(requestedUrl);
//     const absolutePath = path.join(PUBLIC_DIR, fileName);
//     return absolutePath;
// }

// // Test examples
// console.log(url("/"));        
// console.log(url("/main.js"));  


const url = "http://example.com/products?category=books&page=2";

const urlObj = new URL(url)
const queryObj = Object.fromEntries(urlObj.searchParams.entries());
console.log(queryObj)