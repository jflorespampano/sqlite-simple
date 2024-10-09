import sqlite3 from 'sqlite3'
//instalar sqlite3 : npm install sqlite3
const FILENAME='posts.sqlite3'
const SQL_SELECT="SELECT * FROM posts;"
const SQL_SELECT_ONE="SELECT * FROM posts where id=?;"
const SQL_INSERT="insert into posts(userId, title, body) values(?,?,?);"

function muestra(){
    return new Promise((resolve,reject)=>{
        const db = new sqlite3.Database(FILENAME)
        db.all(SQL_SELECT, [], (err, result) => {
            if (err) {
                console.log('Error running sql: ' + sql)
                console.log(err)
                reject(err)
            } else {
                resolve(result)
            }
        })

    })
}

function muestraUno(params) {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database(FILENAME)
        db.get(SQL_SELECT_ONE, params, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

function run(sql, params = []) {
    // console.log(sql,params)
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database(FILENAME)
        db.run(sql, params, function (err) {
            if (err) {
                reject("en run ",err)
            } else {
                //si todo va bien el objeto tis de la funcion callback tendra:
                resolve({ id: this.lastID, changes: this.changes, prueba:db.lastID })
            }
        })
    })
}

function inserta(){
    return run(SQL_INSERT,[0,"titulo 20","body 20"])
}

//llamar a mustra 1
muestraUno(5)
.then(resp=>{
    console.log(resp)
})
.catch(error=>{
    console.log("Error:",error)
})

// //lamar a inserta
// inserta()
// .then(resp=>{
//     console.log(resp)
// })
// .catch(error=>{
//     console.log("Error:",error)
// })