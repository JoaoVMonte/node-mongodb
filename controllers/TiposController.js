const {json} = require("express");
const Tipos = require("../models/Tipos")

const TiposController ={
getAll: async(req, res) => {
    res.json( await Tipos.find())
},
get: async(req, res) => {
    try{
        res.json(await Tipos.findById(req.params.id))
    } catch(error) {
        res.status(400).json({error: 'Registro Não Encontrado'})
        }
},

create: async (req, res) => {
    
    try{
        res.json( await Tipos.create(req.body))
    } catch(error) {
        res.status(400).json(error)
        }
},
update: async(req, res) => {
    
    try{
        res.json(await Tipos.findByIdAndUpdate(req.params.id, req.body))
    } catch(error) {
        res.status(400).json({error: 'Registro Não Encontrado'})
        }
},
delete: async(req, res) => {
    
    try{
        res.json(await Tipos.findByIdAndDelete(req.params.id))
    } catch(error) {
        res.status(400).json({error: 'Registro Não Encontrado'})
        }
}
}

module.exports = TiposController