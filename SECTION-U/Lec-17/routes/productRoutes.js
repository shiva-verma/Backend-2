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
router.get('/product/edit/:pid', async(req, res)=>{
    const {pid} = req.params;
    const product = await Product.findById(pid);
    res.render('product/editProduct.ejs', {product});
})

//to update product and save it into database - PUT
router.put('/product/update/data/:pid', async(req, res)=>{
    const {pid} = req.params;
    const product = await Product.findById(pid);

    const {productName, productdesc, productcate, productprice, productImg} = req.body;

    product.productName = productName;
    product.productdesc = productdesc;
    product.productcate = productcate;
    product.productprice = productprice;
    product.productImg = productImg;

    await product.save();

    Product.findByIdAndUpdate({pid}, req.body)
    // res.send('product updated successfully');
    res.redirect('/showAllproduct');
})

//to delete product fro databse - DELETE
router.delete('/product/delete/:id', async(req, res)=>{
    const {id} = req.params;

    await Product.findByIdAndDelete(id);

    res.redirect('/showAllproduct');
})

module.exports = router; 