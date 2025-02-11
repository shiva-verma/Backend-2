const express = require('express');
const { showAllProduct, showSingleProduct } = require('../controllers/productController');
const router = express.Router();

//to show all product of database in home.ejs - GET
router.get('/product', showAllProduct)
//to show single product on single product page -GET
router.get('/product/:id', showSingleProduct)
//to show addproduct page  - GET
router.get('/product/add', (req,res)=>{
    
})
//to handle addProduct page data and create product - POST
router.post('', (req,res)=>{
    
})
//to show editProduct page - GET
router.get('/product/edit', (req,res)=>{
    
})
//to handle editProduct page data and update product - PUT/PATCH
router.get('', (req,res)=>{
    
})
//to delete product with given id - DELETE
router.get('/product/:id', (req,res)=>{
    
})


module.exports = router