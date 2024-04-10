const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    metodo: {
        type: String,
        required: true,
        enum: ["Debito", "Credito", "Dinheiro", "Pix", ]
    }
})

const Forma_Pagamentos = mongoose.model('Forma_Pagamentos', Schema)
module.exports = Forma_Pagamentos;