import sqlite3 from 'sqlite3'
// import { open } from 'sqlite'

import { access } from 'node:fs';

// const db = new sqlite3.Database(':memory:');
const FILE_NAME='posts.sqlite3'
let datos = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore  molestiae ut reiciendis\nqui aperiam non debitis po nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quoe porro eius odio et labore et velit aut"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendiscommodi nesciunt rem tenetur doloremque ipsam iure\nquis so velit"
    },
    {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat suptatibus quis\nest aut tenetur dolor neque"
    },
    {
        "userId": 1,
        "id": 6,
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihils et ea nemo ab reprehenderit ores velit et doloremque molestiae"
    },
    {
        "userId": 1,
        "id": 7,
        "title": "magnam facilis autem",
        "body": "dolore placeat quibusdam ea quo vitae\nma sequi eos ea sed quas"
    },
    {
        "userId": 1,
        "id": 8,
        "title": "dolorem dolore est ipsam",
        "body": "dignissimos aperiam dolorem qui eum\nfacilis psam ut commodi dolor voluptatum modi aut vitae"
    }];


function crearTabla(db) {
    db.serialize(() => {
        const sql = `CREATE TABLE IF NOT EXISTS posts(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            userId INTEGER NOT NULL,
            title TEXT NOT NULL,
            body  TEXT NOT NULL
        ); `
        db.run(sql);

        const stmt = db.prepare("INSERT INTO posts(userId, title, body) VALUES (?,?,?);");
        datos.forEach(e => {
            stmt.run(e.userId, e.title, e.body);
        });

        stmt.finalize();

        db.each("SELECT * FROM posts;", (err, row) => {
            console.log(row.id + ": " + row.title);
        });
    });

    //db.close();

}


function existeArchivo(myfile){
    return new Promise((resolve,reject)=>{
        access(myfile, (err) => {
            if (!err) {
                console.error(`${myfile} si existe`);
                resolve(true);
            }else{
                console.error(`${myfile} no existe`);
                reject(false)
                //hacer algo con el archivo
            }
        })
    })
}

existeArchivo(FILE_NAME)
.then(resp=>{
    console.log(`El archivo ${FILE_NAME} existe = ${resp}, NO se procede a crear la BD`)
})
.catch(async resp=>{
    console.log(`No existe el archivo de base de datos ${FILE_NAME}, SE procede a crear la BD`)

    const db = new sqlite3.Database('posts.sqlite3')
    crearTabla(db);
    db.close();
})