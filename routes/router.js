const express = require('express')
const router = express.Router()
const ProdutoController = require('../controllers/ProdutoController')
router.get('/', function(req,res){
res.json({message: 'Welcome to our API'})
})


router.get('/produtos', (req, res) => ProdutoController.getAll(req, res))
router.post('/produtos', (req, res) => ProdutoController.create(req, res))
router.get('/produtos/:id', (req, res) => ProdutoController.get(req, res))
router.delete('/produtos/:id', (req, res) => ProdutoController.delete(req, res))
router.put('/produtos/:id', (req, res) => ProdutoController.update(req, res))



module.exports = router