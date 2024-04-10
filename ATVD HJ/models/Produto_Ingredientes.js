const mongoose = require('mongoose')
const ingredientes = require('./Ingredientes')
const produto = require('./Produto')
const Schema = mongoose.Schema({
    nome: {

    },
    poduto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produtos'
    },
    ingredientes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredientes'
    }
    
})

const Produto_ingredientes = mongoose.model('Produto_ingredientes', Schema)
module.exports = Produto_ingredientes;