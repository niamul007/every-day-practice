import dataBase from "./dataBase.mjs";
import http from 'node:http'


const PORT = 8000;
const hostname = '127.0.0.1';


const server = http.createServer((req,res)=>{
    res.end("Hello world");
});

server.listen(PORT,hostname,()=> console.log(`your url is http://${hostname}:${PORT}`))