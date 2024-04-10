const mongoose = require('mongoose')
const ProdutoSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
        trim: true
    },
        preco: {
            type: Number,
            default: 0,
            min: [0, 'Valor Invalido'],
            match: /^\d+(\.\d{1,2})?$/,
        },
    tamanho: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
    },
    ingredientes: [String]
})

const Produto = mongoose.model('Produtos', ProdutoSchema)

module.exports = Produto;