const Produto = require("../models/produto")

const ProdutoController ={
getAll: async(req, res) => {
    res.json( await Produto.find())
},
get: async(req, res) => {
    try{
        res.json(await Produto.findById(req.params.id))
    } catch(error) {
        res.status(400).json({error: 'Registro Não Encontrado'})
        }
},

create: async (req, res) => {
    res.json( await Produto.create(req.body))
},
update: async(req, res) => {
    res.json(await Produto.findByIdAndUpdate(req.params.id, req.body))
},
delete: async(req, res) => {
    
    try{
        res.json(await Produto.findByIdAndDelete(req.params.id))
    } catch(error) {
        res.status(400).json({error: 'Registro Não Encontrado'})
        }
}
}

module.exports = ProdutoController