const express = require('express');
const { showAllProduct, createProduct, updateProduct, deleteProduct } = require('../controller/productController.js');
const router = express.Router();

router.get('/product/all', showAllProduct)

router.post('/product/new', createProduct)

router.put('/product/:id', updateProduct)

router.delete('/product/:id', deleteProduct)

module.exports = router;