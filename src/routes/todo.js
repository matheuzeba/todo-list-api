//  importacoes
const express = require('express');
const todo = require('../controllers/todo');

routes = express();

//  rotas
routes.route('/todo').get(todo.listarTodasAsTarefas).post(todo.criarTarefa);
routes.route('/todo/:id').get(todo.listarTarefaId).patch(todo.atualizarTarefaId).delete(todo.deletarTarefa);

module.exports = routes;