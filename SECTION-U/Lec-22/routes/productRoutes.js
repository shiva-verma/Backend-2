const express = require('express');
const mongoose = require('mongoose');
const Product = require('../model/productSchema.js');
const Review = require('../model/reviewSchema.js');
const router = express.Router();

// Middleware to validate ObjectId
const validateObjectId = (req, res, next) => {
    const { id, pid } = req.params;
    const idToCheck = id || pid;
    
    if (!mongoose.Types.ObjectId.isValid(idToCheck)) {
        return res.status(400).send('Invalid ID format');
    }
    next();
};

// GET all products
router.get('/showAllproduct', async(req, res) => {
    try {
        const products = await Product.find({});
        res.render('product/products.ejs', { products });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching products');
    }
});

// GET single product
router.get('/product/single/:id', validateObjectId, async(req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id).populate('reviews');
        console.log(product);
        
        if (!product) {
            return res.status(404).send('Product not found');
        }

        res.render('product/singleProduct.ejs', { product });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching product');
    }
});

// GET add product form
router.get('/product/add', (req, res) => {
    res.render('product/addProduct.ejs');
});

// POST create new product
router.post('/product/info', async(req, res) => {
    try {
        await Product.create(req.body);
        res.redirect('/showAllproduct');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating product');
    }
});

// GET edit product form
router.get('/product/edit/:pid', validateObjectId, async(req, res) => {
    try {
        const { pid } = req.params;
        const product = await Product.findById(pid);
        
        if (!product) {
            return res.status(404).send('Product not found');
        }

        res.render('product/editProduct.ejs', { product });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching product for edit');
    }
});

// PUT update product
router.put('/product/update/data/:pid', validateObjectId, async(req, res) => {
    try {
        const { pid } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(pid, req.body, { new: true });
        
        if (!updatedProduct) {
            return res.status(404).send('Product not found');
        }

        res.redirect('/showAllproduct');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating product');
    }
});

// DELETE product
router.delete('/product/delete/:id', validateObjectId, async(req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        
        if (!deletedProduct) {
            return res.status(404).send('Product not found');
        }

        res.redirect('/showAllproduct');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting product');
    }
});

// POST add review to product
router.post('/review/data/:pid', validateObjectId, async(req, res) => {
    try {
        const { pid } = req.params;
        const product = await Product.findById(pid);
        
        if (!product) {
            return res.status(404).send('Product not found');
        }

        const review = await Review.create(req.body);
        product.reviews.push(review);
        await product.save();
        
        res.redirect(`/product/single/${pid}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding review');
    }
});

//DELETE REVIEW
router.delete('/review/:rid/:pid', validateObjectId, async(req, res)=>{
     const {rid} = req.params;
     const {pid} = req.params;

     await Review.findByIdAndDelete(rid);

     res.redirect(`/product/single/${pid}`)
})

module.exports = router;