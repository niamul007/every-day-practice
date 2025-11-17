import path from "path";
import { fileURLToPath } from "url";
import * as fs from "node:fs/promises";
import http from 'node:http'
import getContent from "../getContentType.mjs";
const PORT = 8000;
const hostname = '127.0.0.1';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname,'..','public')


function filePath(requestedUrl){
    const fileName = requestedUrl === '/'?'horrorStory.html':requestedUrl;
    return path.join(publicDir,fileName);
}


const server = http.createServer(async(req,res)=>{
    try{
    const urlObj = new URL(req.url, `http://${hostname}`);
    const requestedPath = urlObj.pathname;
    const absolutePath = filePath(requestedPath);
    const ext = path.extname(absolutePath);
    const contentType = getContent(ext);
    const content = await fs.readFile(absolutePath);
    res.statusCode = 200;
    res.setHeader('Content-Type',contentType);
    res.end(content);
    }
    catch(error){
        console.log(error.message)
    }
})


server.listen(PORT,hostname,()=>{
    console.log(`http://${hostname}:${PORT}`);
})