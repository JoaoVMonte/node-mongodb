const express = require('express')
const router = express.Router()
const ProdutoController = require('../controllers/ProdutoController')
const ComandaController = require('../controllers/ComandaController')
const ClienteController = require('../controllers/ClienteController')
router.get('/', function(req,res){
res.json({message: 'Welcome to our API'})
})

//produtos
router.get('/produtos', (req, res) => ProdutoController.getAll(req, res))
router.post('/produtos', (req, res) => ProdutoController.create(req, res))
router.get('/produtos/:id', (req, res) => ProdutoController.get(req, res))
router.delete('/produtos/:id', (req, res) => ProdutoController.delete(req, res))
router.put('/produtos/:id', (req, res) => ProdutoController.update(req, res))

//comanda
router.get('/comanda', (req, res) => ComandaController.getAll(req, res))
router.post('/comanda', (req, res) => ComandaController.create(req, res))
router.get('/comanda/:id', (req, res) => ComandaController.get(req, res))
router.delete('/comanda/:id', (req, res) => ComandaController.delete(req, res))
router.put('/comanda/:id', (req, res) => ComandaController.update(req, res))

// clientes
router.get('/clientes', (req, res) => ClienteController.getAll(req, res))
router.post('/clientes', (req, res) => ClienteController.create(req, res))
router.get('/clientes/:id', (req, res) => ClienteController.get(req, res))
router.put('/clientes/:id', (req, res) => ClienteController.update(req, res))
router.delete('/clientes/:id', (req, res) => ClienteController.delete(req, res))


module.exports = router