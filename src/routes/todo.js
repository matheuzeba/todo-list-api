//  importacoes
const express = require('express');
const todo = require('../controllers/todo');

routes = express();

//  rota generica para teste
routes.route('/todo').get(todo.listarTodasAsTarefas);

module.exports = routes;