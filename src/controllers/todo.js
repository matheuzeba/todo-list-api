const listarTodasAsTarefas = (req,res) => {
    res.json('listar tudo')
}

const listarTarefaId = (req, res) => {
    res.json('listar uma tarefa por id')
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