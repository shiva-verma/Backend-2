const express = require('express');
const {createProduct, updateProduct, deleteProduct, showAddForm, showProduct } = require('../controllers/productController.js');
const router = express.Router();

//rendering add new product page
router.get('/product/new', showAddForm)


//getting data from add new product page form
router.post('/product', createProduct)

//showing all the product stored in database
router.get('/product/show', showProduct)

//to delete element form using there id
router.delete('/product/delete/:id', deleteProduct)

//update
router.put('/product/update', updateProduct)

//delete
router.delete('/product/delete', deleteProduct)

module.exports = router;