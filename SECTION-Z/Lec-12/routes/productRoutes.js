const express = require('express');
const router = express.Router();

//GET, POST, PUT , DELETE
//To show all the product  - GET
router.get('/products', (req, res)=>{

})

//to show addProduct page - GET
router.get('/product/add', (req, res)=>{
    res.render('products/addProduct.ejs')
})

//to create a product from data - POST
router.post('/product/info', (req, res)=>{
    
})

//to show updateProduct page - GET
router.get('/product/update', (req, res)=>{
    res.render('products/updateProduct.ejs')
})

//to update product from data - PUT
router.put('/product/update/data', (req, res)=>{
    
})

//to delete product from id - DELETE
router.delete('/product/delete/:id', (req, res)=>{
    
})

module.exports = router;
