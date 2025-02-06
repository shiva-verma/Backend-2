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
    // const {product_id, product_name, product_desc, product_ctg, product_price} = req.body;

    try {
        await Product.create(req.body);
        res.send('Product added successfully');
    } catch (error) {
        console.log(error)
    }
})

//to show updateProduct page
router.get('/product/edit', (req, res)=>{
    res.render('product/editProduct.ejs')
})

//to update a product using p_id
router.put('', (req, res)=>{

})

//to delete a product using p_id
router.delete('',(req, res)=>{

})
module.exports = router;