





const {json} = require("express");
const contr = require("../models/contr")

const contrController ={
getAll: async(req, res) => {
    res.json( await contr.find())
},
get: async(req, res) => {
    try{
        res.json(await contr.findById(req.params.id))
    } catch(error) {
        res.status(400).json({error: 'Registro Não Encontrado'})
        }
},

create: async (req, res) => {
    
    try{
        res.json( await contr.create(req.body))
    } catch(error) {
        res.status(400).json(error)
        }
},
update: async(req, res) => {
    
    try{
        res.json(await contr.findByIdAndUpdate(req.params.id, req.body))
    } catch(error) {
        res.status(400).json({error: 'Registro Não Encontrado'})
        }
},
delete: async(req, res) => {
    
    try{
        res.json(await contr.findByIdAndDelete(req.params.id))
    } catch(error) {
        res.status(400).json({error: 'Registro Não Encontrado'})
        }
}
}

module.exports = contrController