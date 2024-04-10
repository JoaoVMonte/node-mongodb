const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    }, 

})

const Cliente = mongoose.model('Cliente', Schema)
module.exports = Cliente;