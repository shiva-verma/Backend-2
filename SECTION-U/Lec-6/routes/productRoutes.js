const express = require('express');
const { showProduct, createProduct, deleteProduct } = require('../controllers/productController.js');
const router = express.Router();

router.get('/product/showAll', showProduct)

router.post('/product/new', createProduct)

router.delete('/product/delete', deleteProduct)

module.exports = router;
