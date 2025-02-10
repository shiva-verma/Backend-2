const express = require('express');
const { showAllProducts, showSingleProduct, addProductPage, createProduct, editProductPage, deleteProduct, editProduct } = require('../controllers/productController');
const router = express.Router();

//to show all products - GET
router.get('/products', showAllProducts)

//show single product - GET
router.get('/product/singleProduct', showSingleProduct)

//show addProduct form page - GET 
router.get('/product/add', addProductPage)

//create product from form data - POST
router.post('', createProduct)

//show updateProduct form page - GET
router.get('/product/edit', editProductPage)

//update product from form data - PUT
router.put('', editProduct)

//delete product using product id -DELETE
router.delete('', deleteProduct)

module.exports = router;