const {json} = require("express");
const Cargos = require("../models/Cargos")

const CargosController ={
getAll: async(req, res) => {
    res.json( await Cargos.find())
},
get: async(req, res) => {
    try{
        res.json(await Cargos.findById(req.params.id))
    } catch(error) {
        res.status(400).json({error: 'Registro Não Encontrado'})
        }
},

create: async (req, res) => {
    
    try{
        res.json( await Cargos.create(req.body))
    } catch(error) {
        res.status(400).json(error)
        }
},
update: async(req, res) => {
    
    try{
        res.json(await Cargos.findByIdAndUpdate(req.params.id, req.body))
    } catch(error) {
        res.status(400).json({error: 'Registro Não Encontrado'})
        }
},
delete: async(req, res) => {
    
    try{
        res.json(await Cargos.findByIdAndDelete(req.params.id))
    } catch(error) {
        res.status(400).json({error: 'Registro Não Encontrado'})
        }
}
}

module.exports = CargosController