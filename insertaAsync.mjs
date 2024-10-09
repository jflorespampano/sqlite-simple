import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

//para depuracion
sqlite3.verbose();

const FILENAME='posts.sqlite3'
const SQL_INSERT="insert into posts(userId, title, body) values(?,?,?);"

async function inserta(params) {
    const db= await open({
        filename: FILENAME,
        driver: sqlite3.Database
    });
    const resp= await db.run(SQL_INSERT, params)
    return resp
}
const userId='2'
const title='titulo 22'
const body='body 22'
inserta([userId,title,body])
.then(resp=>{
    console.log("respuesta:",resp)
})
.catch(err=>{
    console.log("Error:",err)
})