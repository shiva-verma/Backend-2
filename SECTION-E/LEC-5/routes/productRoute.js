const express = require('express');
const router = express.Router();
const {showAllProduct, createProduct, updateProduct, deleteProduct} = require('../controller/productController.js')

router.get('/product/showAll', showAllProduct)

router.post('/product/create', createProduct)

router.put('/product/:id', updateProduct)

router.delete('/product/delete/:id', deleteProduct)

module.exports = router;