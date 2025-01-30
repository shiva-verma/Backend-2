const express = require('express');
const { showProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productController.js');
const router = express.Router();

//read
router.get('/product/show', showProduct)

//create
router.post('/product/create', createProduct)

//update
router.put('/product/update', updateProduct)

//delete
router.delete('/product/delete', deleteProduct)

module.exports = router;