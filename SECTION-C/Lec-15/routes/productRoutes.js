const express = require('express');
const Product = require('../model/productSchema.js')
const router = express.Router();

//to show all product
router.get('/products', async(req, res)=>{
    const products = await Product.find({});

    res.render('product/home.ejs', {products});
})

//to show addProduct page
router.get('/product/add', (req, res)=>{
    res.render('product/addProduct.ejs')
})

//to create a product & save into database
router.post('/product/info', async(req, res)=>{
    try {
        await Product.create(req.body);
        res.redirect('/p1/products');
    } catch (error) {
        console.log(error)
    }
})

//to show updateProduct page
router.get('/product/edit/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        const product = await Product.find({_id:id});
        res.render('product/editProduct.ejs', {products:product})
    } catch (error) {
        console.log(error)
    }
})

//to update a product using p_id
router.put('', (req, res)=>{

})

//to delete a product using p_id
router.delete('/product/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        await Product.findByIdAndDelete(id);
        res.redirect('/p1/products');
    } catch (error) {
        console.log(error)
    }

})
module.exports = router;