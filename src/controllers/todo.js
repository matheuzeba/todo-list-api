const todo = require('../models/todo')

const listarTodasAsTarefas = async (req,res) => {
    const encontrar = await todo.find({})
    res.status(200).json(encontrar)
}

const listarTarefaId = async (req, res) => {
    const {id} = req.params
    const encontrar = await todo.findById(id)
    res.status(200).json(encontrar)
}

const atualizarTarefaId = (req, res) => {
    res.json ('atualizar uma tarefa por id')
}

const criarTarefa = (req, res) => {
    res.json ('criar uma tarefa')
}

const deletarTarefa = (req, res) => {
    res.json ('deletar uma tarefa')
}

module.exports = {
    listarTodasAsTarefas,
    listarTarefaId,
    atualizarTarefaId,
    criarTarefa,
    deletarTarefa
}