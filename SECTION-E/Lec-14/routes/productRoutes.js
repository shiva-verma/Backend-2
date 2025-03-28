const express = require('express');
const { showAllProducts, showSingleProduct, addProductPage, createProduct, editProductPage, deleteProduct, editProduct, createReview } = require('../controllers/productController');
const router = express.Router();

//to show all products - GET
router.get('/products', showAllProducts)

//show single product - GET
router.get('/product/singleProduct/:id', showSingleProduct)

//show addProduct form page - GET 
router.get('/product/add', addProductPage)

//create product from form data - POST
router.post('/product/info', createProduct)

//show updateProduct form page - GET
router.get('/product/edit/:id', editProductPage)

//update product from form data - PUT
router.put('/product/:id', editProduct)

//delete product using product id -DELETE
router.delete('/product/:id', deleteProduct)

router.post('/review/data/:pid', createReview);

module.exports = router;