


const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    poduto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produtos'
    },
    comanda: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comanda'
    },
    quantidade: {
        type: Number,
    }
})

const Produto_Comanda = mongoose.model('Produto_Comanda', Schema)
module.exports = Produto_Comanda;