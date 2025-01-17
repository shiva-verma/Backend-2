const express = require('express');
const { showAllProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productControllers.js');
const router = express.Router();

router.get('/products/all', showAllProduct)

router.post('/products/new', createProduct)

router.patch('/products/:id', updateProduct)

router.delete('/products/:id', deleteProduct)

module.exports = router;