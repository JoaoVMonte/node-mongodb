const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    }
})

const Cargos = mongoose.model('Cargos', Schema)
module.exports = Cargos;