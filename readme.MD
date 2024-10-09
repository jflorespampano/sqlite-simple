# Notas

Este ejemplo muestra sentencias básicas para creación y cenexión a una base de datos SQlite3, la base de datos puede ser creada con cualquier aplicación como "admin sqlite" o "sqlite studio", pero también se muestra un código para la creación de la base de datos por medio de código js.

Puede instalar una extensión de VSCode para visualizar una base de dataos SQLite3, la extensión es:
""SQLite Viewer de Florian Klampfer", este complemeto solo permite visualizar los datos, no permite crear la base de datos ni modificarla.

## instalar

Despues de clonar o bajar este repositorio desde GitHub, puede instalar esta aplicación ejecutando la sentencia siguiente en su shell o en una ventana de power shelll.

```sh
npm install
```
Esto instala los paquetes necesarios para el proyecto y que son 2, cuyo nombre puede ver en el archivo package.json

```json
"dependencies": {
    "sqlite": "^5.1.1",
    "sqlite3": "^5.1.7"
  },
```

## crear base de datos

El archivo de base de datos "posts.sqlite3" ya viene en la descarga de este proyecto, sin embargo si quiere crear la base de datos por que por alguna razon no la tiene, puede hacerlo asi:

Para crear la base de datos con los campos {userId,id,title,body} y 8 datos fake, ejecute:

```sh
node crearDB.mjs
```

## Ejemplos de acceso a la base e datos

En los archivos:
1. muestraSmpl.mjs
2. insertaSmpl.mjs

Tiene ejemplos de uso de la base de datos con funciones callback

En el archivo "indexPromess.mjs" puede encontrar ejemplos de acceso a la base de datos con promesas:

1. muestra()
2. muestraUno(params)
3. inserta()

Los archivos:
1. insertAsync.mjs
2. muestraAsync.mjs

Tienen ejemplos de acceso a la base de datos usando async await

## Este repositorio fue iniciado y subido asi:

```js
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/jflorespampano/sqlite-simple.git
git push -u origin main
```