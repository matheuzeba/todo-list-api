const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    nome: {
        type:String,
        required:[true, "o nome é obrigatorio"],
        trim:true
    },
    completado:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('Tarefas', todoSchema);