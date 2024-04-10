const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    nome: String,
    descricao:{
        type: String,
    }

})

const Ingredientes = mongoose.model('Ingredientes', Schema)
module.exports = Ingredientes;