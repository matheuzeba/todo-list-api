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

const atualizarTarefaId = async (req, res) => {
    const {id} = req.params
    const tarefa = await todo.findByIdAndUpdate(id, req.body, {
        new:true,
        runValidators: true
    })
    res.status(200).json(tarefa)
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