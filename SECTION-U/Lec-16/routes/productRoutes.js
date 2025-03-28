const express = require('express');
const { showAllProduct } = require('../controllers/productController');
const Product = require('../model/productSchema.js')
const router = express.Router();

//GET, POST , PUT , DELETE
//show all product of database - GET
router.get('/showAllproduct', async(req, res)=>{
    const products = await Product.find({});
    res.render('product/products.ejs', {products});
})

//show single product of database - GET
router.get('/singleProduct/:id', async(req, res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);

    res.render('product/singleProduct.ejs', {product})
})

//to show addproduct page -GET
router.get('/product/add', (req, res)=>{
    res.render('product/addProduct.ejs');
})

//to create a product and save it into database - POST
router.post('/product/info', async(req, res)=>{
    await Product.create(req.body);
    res.redirect('/showAllproduct')
    
})

//to show updateProduct page - GET
router.get('/product/edit', (req, res)=>{
    res.render('product/editProduct.ejs');
})

//to update product and save it into database - PUT
router.put('', (req, res)=>{
   
})

//to delete product fro databse - DELETE
router.delete('/product/delete/:id', async(req, res)=>{
    const {id} = req.params;

    await Product.findByIdAndDelete(id);

    res.redirect('/showAllproduct');
})

module.exports = router; 