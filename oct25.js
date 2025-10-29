import database from "./database.js";

async function getData(){
    try{
        const response = await database();
        console.log(response)
    }
    catch(error){
        console.error(error.message)
    }
}

getData()