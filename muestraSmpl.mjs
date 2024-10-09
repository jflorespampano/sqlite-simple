import sqlite3 from 'sqlite3'
//instalar sqlite3 : npm install sqlite3
const FILENAME='posts.sqlite3'
const SQL_SELECT="SELECT * FROM posts;"
const SQL_SELECT_ONE="SELECT * FROM posts where id=?;"

function muestra(){
    const db = new sqlite3.Database(FILENAME)
    db.all(SQL_SELECT, [], (err, result) => {
        if (err) {
            console.log('Error running sql: ' + sql)
            console.log(err)
            
        } else {
            console.log("Datos:",result)
        }
    })
}

function muestraUno(params = []){
    const db = new sqlite3.Database(FILENAME)
    db.get(SQL_SELECT_ONE, params, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Data:",result)
        }
    })
}

muestra()
// muestraUno([9])