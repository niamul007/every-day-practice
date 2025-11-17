import path from "path";
import { fileURLToPath } from "url";
import * as fs from "node:fs/promises";
import http from 'node:http'

const PORT = 8000;
const hostname = '127.0.0.1';

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','application.json');
    res.end("Hello there")
})


server.listen(PORT,hostname,()=>{
    console.log(`http://${hostname}:${PORT}`);
})