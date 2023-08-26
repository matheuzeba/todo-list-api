const todo = require('../models/todo');
const asyncWrapper = require('../middlewares/async');

const listarTodasAsTarefas = asyncWrapper(async (req,res) => {
    const tarefa = await todo.find({});
    res.status(200).json(tarefa);
})

const listarTarefaId = asyncWrapper(async (req, res) => {
    const {id} = req.params;
    const tarefa = await todo.findById(id);
    
    if(!tarefa) {
        return res.status(404).json({mensagem: "este id nao existe"});
    }

    res.status(200).json(tarefa);
})

const atualizarTarefaId = asyncWrapper(async (req, res) => {
    const {id} = req.params;
    const tarefa = await todo.findByIdAndUpdate(id, req.body, {
        new:true,
        runValidators: true
    });
    
    if(!tarefa) {
        return res.status(404).json({mensagem: "este id nao existe"});
    }

    res.status(200).json(tarefa);
})

const criarTarefa = asyncWrapper(async (req, res) => {
    const tarefa = await todo.create(req.body);
    res.status(200).json(tarefa);
})

const deletarTarefa = asyncWrapper(async (req, res) => {
    const {id} = req.params;
    const tarefa = await todo.findByIdAndDelete(id);

    if(!tarefa) {
        return res.status(404).json({mensagem: "este id nao existe"});
    }

    res.status(200).json(tarefa);
})

module.exports = {
    listarTodasAsTarefas,
    listarTarefaId,
    atualizarTarefaId,
    criarTarefa,
    deletarTarefa
}