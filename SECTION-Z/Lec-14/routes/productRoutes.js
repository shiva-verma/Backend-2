const express = require('express');
const Product = require('../models/productSchema');
const router = express.Router();

//GET, POST, PUT , DELETE
//To show all the product  - GET
router.get('/products', async(req, res)=>{
    const products = await Product.find({})
    res.render('products/home.ejs', {products})
})

//to show single product
router.get('/product/single/:id', async(req, res)=>{
    const {id} = req.params;

    const product = await Product.findById(id);

    res.render('products/singleProduct.ejs', {product})

})

//to show addProduct page - GET
router.get('/product/add', (req, res)=>{
    res.render('products/addProduct.ejs')
})

//to create a product from data - POST
router.post('/product/info', async(req, res)=>{
    await Product.create(req.body);
    // res.send('data saved successfully')
    res.redirect('/products')
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
