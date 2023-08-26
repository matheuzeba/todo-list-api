const todo = require('../models/todo')

const listarTodasAsTarefas = async (req,res) => {
    const tarefa = await todo.find({})
    res.status(200).json(tarefa)
}

const listarTarefaId = async (req, res) => {
    const {id} = req.params
    const tarefa = await todo.findById(id)
    res.status(200).json(tarefa)
}

const atualizarTarefaId = (req, res) => {
    res.json ('atualizar uma tarefa por id')
}

const criarTarefa = async (req, res) => {
    const tarefa = await todo.create(req.body)
    res.status(200).json(tarefa)
}

const deletarTarefa = async (req, res) => {
    const {id} = req.params
    const tarefa = await todo.findByIdAndDelete(id)
    res.status(200).json(tarefa)
}

module.exports = {
    listarTodasAsTarefas,
    listarTarefaId,
    atualizarTarefaId,
    criarTarefa,
    deletarTarefa
}