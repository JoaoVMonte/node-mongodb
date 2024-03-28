const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}))

const conn = require('./db/conn');
conn()

//importando as rotas do arquivo routes.js
const routes = require('./routes/router')
app.use('/', routes)

app.listen(3000, function(){
    console.log('Server UP port 3000')
})