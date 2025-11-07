import path from 'node:path';

export function apiStatic(baseDir){
    const filePath = path.join(baseDir,'public','index.html');
    console.log(filePath)

}