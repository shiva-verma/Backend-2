const express = require('express');
const Product = require('../model/productSchema.js')
const Review = require('../model/reviewSchema.js');
const router = express.Router();

//to show all product of database in home.ejs - GET
router.get('/products', async(req, res)=>{
    try {
        const temp = await Product.find({});
        res.render('products/home.ejs', {products:temp});
    } catch (error) {
        
    }
})

//to show single product on single product page -GET
router.get('/showSingle/:id', async(req, res)=>{
    try {
        const {id} = req.params;
    
        const product = await Product.findById(id).populate('reviews');
        console.log(product);
    
        res.render('products/singleProduct.ejs', {product});
        
    } catch (error) {
        console.log(error)
    }
})

//to show addproduct page  - GET
router.get('/product/add', (req,res)=>{
    try {
        res.render('products/addProduct.ejs')
    } catch (error) {
        console.log(error)
    }
})

//to handle addProduct page data and create product - POST
router.post('/product/info', async(req,res)=>{
    try {
        //promise
       await Product.create(req.body);
       res.redirect('/p1/products')
    } catch (error) {
        console.log(error)
    }
})

//to show editProduct page - GET
// router.get('/product/edit', (req,res)=>{
    
// })

//to handle editProduct page data and update product - PUT/PATCH
router.get('', (req,res)=>{
    
})

//to delete product with given id - DELETE
router.delete('/product/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        await Product.findByIdAndDelete(id);
        res.redirect('/p1/products');
    } catch (error) {
        console.log(error)
    }

    
})

router.post('/product/data/:pid', async(req, res)=>{

    try {
        const {pid} = req.params;
        const product = await Product.findById(pid);
        const reviewId = await Review.create(req.body);

        product.reviews.push(reviewId);

        await product.save();
        res.redirect(`/p1/showSingle/${pid}`);
    } catch (error) {
        console.log(error)
    }
})

module.exports = router