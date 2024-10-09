import sqlite3 from 'sqlite3'
//instalar sqlite3 : npm install sqlite3
const FILENAME='posts.sqlite3'
const SQL_INSERT="insert into posts(userId, title, body) values(?,?,?);"

function run(sql, params = []) {
    // console.log(sql,params)
    const db = new sqlite3.Database(FILENAME)
    db.run(sql, params, function (err) {
        if (err) {
            console.log("error: ",err)
        } else {
            console.log({ id: this.lastID, changes: this.changes, prueba:db.lastID })
        }
    })
    
}

function inserta(){
    run(SQL_INSERT,[0,"titulo 21","body 21"])
}

inserta()