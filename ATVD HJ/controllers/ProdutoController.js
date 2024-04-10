const {json} = require("express");
const Produto = require("../models/Produto")

const ProdutoController ={
getAll: async(req, res) => {
//     const tipo = req.query.tipo
//     const nome = req.query.nome
    
//     const filtros = {  
//         tipo: {$regex: new RegExp(tipo,'i')},
//         nome: {$regex: new RegExp(nome,'i')}
//     }

//     // res.json( await Produto.find({tipo: {$regex: new RegExp(tipo,'i')}})) //buscador por tipo de produto
//     res.json( await Produto.find({
//         tipo: {$regex: new RegExp(tipo,'i')},
//         nome: {$regex: new RegExp(nome,'i')}
// })) 

const filtros = {}
const campos = Object.keys(Produto.schema.paths)

for(let campo in req.query){
    if(campos.includes(campo)){
        filtros[campo] =  {$regex: new RegExp(req.query[campo], 'i')}
    }
}
res.json( await Produto.find(filtros)) //buscador por tipo de produto

},
get: async(req, res) => {
    try{
        res.json(await Produto.findById(req.params.id))
    } catch(error) {
        res.status(400).json({error: 'Registro Não Encontrado'})
        }
},

create: async (req, res) => {
    
    try{
        res.json( await Produto.create(req.body))
    } catch(error) {
        res.status(400).json(error)
        }
},
update: async(req, res) => {
    
    try{
        res.json(await Produto.findByIdAndUpdate(req.params.id, req.body))
    } catch(error) {
        res.status(400).json({error: 'Registro Não Encontrado'})
        }
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