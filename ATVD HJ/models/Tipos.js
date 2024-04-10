const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    tipo: {
        type: String,
        enum: ["Bebidas", "Pizzas", "Massas", "Sobremesas"]
    },
})

const Tipos = mongoose.model('Tipos', Schema)
module.exports = Tipos;