const {json} = require("express");
const Forma_Pagamentos = require("../models/Forma_Pagamentos")

const Forma_PagamentosController ={
getAll: async(req, res) => {
    res.json( await Forma_Pagamentos.find())
},
get: async(req, res) => {
    try{
        res.json(await Forma_Pagamentos.findById(req.params.id))
    } catch(error) {
        res.status(400).json({error: 'Registro Não Encontrado'})
        }
},

create: async (req, res) => {
    
    try{
        res.json( await Forma_Pagamentos.create(req.body))
    } catch(error) {
        res.status(400).json(error)
        }
},
update: async(req, res) => {
    
    try{
        res.json(await Forma_Pagamentos.findByIdAndUpdate(req.params.id, req.body))
    } catch(error) {
        res.status(400).json({error: 'Registro Não Encontrado'})
        }
},
delete: async(req, res) => {
    
    try{
        res.json(await Forma_Pagamentos.findByIdAndDelete(req.params.id))
    } catch(error) {
        res.status(400).json({error: 'Registro Não Encontrado'})
        }
}
}

module.exports = Forma_PagamentosController