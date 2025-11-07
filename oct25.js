import database from "./database.js";
import http from 'node:http'
const PORT = 8000;
const hostname = '127.0.0.1'

const server = http.createServer((req,res)=>{
    res.end("Iam here ")
})

server.listen(PORT,hostname,()=> console.log("hi there iam you suced" + `http://${hostname}:${PORT}`))