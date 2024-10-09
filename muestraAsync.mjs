import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

//para depuracion
sqlite3.verbose();

const FILENAME='posts.sqlite3'
const SQL_SELECT="SELECT * FROM posts;"
const SQL_SELECT_ONE="SELECT * FROM posts where id=?;"

async function getAll(){
    const db= await open({
        filename: FILENAME,
        driver: sqlite3.Database
    });
    const result = await db.all(SQL_SELECT);
    db.close();
    console.log(result)
    return result
}

async function get(params = []){
    const db= await open({
        filename: FILENAME,
        driver: sqlite3.Database
    });
    const result = await db.get(SQL_SELECT_ONE,params);
    db.close();
    console.log(result)
    return result
}

getAll()
// get([9])