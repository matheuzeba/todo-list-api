//  dotenv
require('dotenv').config({path: process.cwd() + '/src/.env'})
//  importacoes
const express = require('express');
const database = require('./database/database')
const routes = require('./routes/todo')
const asyncWrapper = require('./middlewares/async')
//  instancia do express
const app = express();

//  middlewares
app.use(express.json());

//  rotas
app.use('/api/v1', routes)

//  funcao para iniciar servidor
const iniciar = async () => {
    try {
        await database(process.env.MONGO_URL)
        app.listen(3000)
        console.log('Servidor iniciado')
    } catch (error) {
        console.log(error)
    }
}

iniciar()
