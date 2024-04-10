const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    nome: String,
    data: {
        type: Date,
        required: true,
        set: (value) => {
            const [dia, mes, ano] = value.split('/')
            return `${ano}-${mes}-${dia}`
        }
    } 

})

const Comanda = mongoose.model('Comanda', Schema)
module.exports = Comanda;