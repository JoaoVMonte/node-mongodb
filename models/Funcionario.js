const mongoose = require('mongoose')
const Cargo = require('./Cargo')

const Schema = mongoose.Schema({
    nome: String,

})

const Funcionario = mongoose.model('Funcionario', Schema)
module.exports = Funcionario;