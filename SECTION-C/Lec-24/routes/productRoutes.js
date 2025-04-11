const express = require('express');
const Product = require('../model/productSchema.js')
const router = express.Router();
const Review = require('../model/reviewSchema.js');
const { isLoggedIn, isSeller } = require('../middleware/authentication.js');


//to show all product
router.get('/products', async (req, res) => {
    const products = await Product.find({});

    console.log(req.user);
    console.log(res.locals.currUser)
    res.render('product/home.ejs', { products });
})

//to show single product
router.get('/product/single/:id', isLoggedIn ,async (req, res) => {
    const { id } = req.params;

    const product = await Product.findById(id).populate('reviews');
    // console.log(product);
    console.log(req.user);
    res.render('product/singleProduct.ejs', { product });
})

//to show addProduct page
router.get('/product/add',  isLoggedIn, isSeller, (req, res) => {
    res.render('product/addProduct.ejs')
})

//to create a product & save into database
router.post('/product/info',async (req, res) => {
    try {
        await Product.create(req.body);
        req.flash('success', "Product cfeated successfuly")
        res.redirect('/p1/products');
    } catch (error) {
        console.log(error)
    }
})

//to show updateProduct page
router.get('/product/edit/:id',isLoggedIn, isSeller ,async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.render('product/editProduct.ejs', { products: product })
    } catch (error) {
        console.log(error)
    }
})

//to update a product using p_id
router.put('/product/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const { product_id, product_name } = req.body;

        await Product.findByIdAndUpdate(id, req.body);

        res.redirect('/p1/products');

    } catch (error) {
        console.log(error);
    }
})

//to delete a product using p_id
router.delete('/product/:id', isLoggedIn, isSeller, async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        res.redirect('/p1/products');
    } catch (error) {
        console.log(error)
    }

})

router.post('/review/data/:id', async (req, res) => {
    const { id } = req.params;
    const { comment, rating } = req.body;

    const product = await Product.findById(id);
    console.log(product)
    const reviewId = await Review.create({ comment, rating });
    console.log(reviewId)

    product.reviews.push(reviewId);
    await product.save({ validateBeforeSave: false });
    res.redirect(`/p1/product/single/${id}`)

})

router.delete('/review/:reviewId/:productId', async (req, res) => {
    const { reviewId, productId } = req.params;

    await Review.findByIdAndDelete(reviewId);

    //   const product = Product.findById(productId);

    res.redirect(`/p1/product/single/${productId}`)

})

//cart

router.post('/cartdata/:pid', async(req, res)=>{
    const {pid} = req.params;

    const user = req.user;

    user.cart.push(pid);

    await user.save();

    res.redirect("/p1/cart");
    
})

router.get("/cart", async(req, res)=>{
    const user = req.user;

    const userData = await user.populate('cart');
    const cartData = userData.cart;

    res.render('product/cart.ejs', {cartData});
})

module.exports = router;