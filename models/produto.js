const mongoose = require('mongoose')

const produtoSchema = mongoose.Schema({
    nome: String,
    preço: Number,
    tamanho: String,
    tipo: String
})

const Produto = mongoose.model('Produtos', produtoSchema)

module.exports = Produto;