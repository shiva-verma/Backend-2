const express = require('express');
const { showAllProduct } = require('../controllers/productController');
const router = express.Router();

//GET, POST , PUT , DELETE
//show all product of database - GET
router.get('/showAllproduct', (req, res)=>{

})

//show single product of database - GET
router.get('/singleProduct/:id', (req, res)=>{
    
})

//to show addproduct page -GET
router.get('/product/add', (req, res)=>{
    res.render('product/addProduct.ejs');
})

//to create a product and save it into database - POST
router.post('/product/info', (req, res)=>{
    console.log(req.body);
    res.send('data sent successfully')
})

//to show updateProduct page - GET
router.get('/product/edit', (req, res)=>{
    res.render('product/editProduct.ejs');
})

//to update product and save it into database - PUT
router.put('', (req, res)=>{
   
})

//to delete product fro databse - DELETE
router.delete('/product/:id', (req, res)=>{
    
})

module.exports = router; 