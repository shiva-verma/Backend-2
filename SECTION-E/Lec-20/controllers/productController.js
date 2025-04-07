const Product = require('../model/productSchema.js');
const Review = require('../model/reviewSchema.js');

async function showAllProducts(req, res){
    try {
        const data = await Product.find({});
        res.render('product/home.ejs', {products:data});
    } catch (error) {
        console.log(error)
    }
}

async function showSingleProduct(req, res){
    const {id} = req.params;
    const product = await Product.findById(id).populate('reviews');
    res.render('product/singleProduct.ejs', {product});
}

async function addProductPage(req, res){
    res.render('product/addProduct.ejs')
}

async function createProduct(req, res){
    try {
        await Product.create(req.body);
        res.redirect('/p1/products'); 
    } catch (error) {
        console.log(error);
    }
}

async function editProductPage(req, res){
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('product/updateProduct.ejs', {product})
}

async function editProduct(req, res){
    try {
        const {id} = req.params;
        await Product.findByIdAndUpdate(id, req.body);
        res.redirect('/p1/products');
    } catch (error) {
        console.log(error)
    }
}

async function deleteProduct(req, res){
    try {
        const {id} = req.params;
    
        await Product.findByIdAndDelete(id);
    
        res.redirect('/p1/products');
        
    } catch (error) {
        console.log(error)
    }
}

async function createReview(req, res){
    const {pid} = req.params;

    const product = await Product.findById(pid);
    const reviewId = await Review.create(req.body);

    product.reviews.push(reviewId);

    await product.save();

    res.redirect(`/p1/product/singleProduct/${pid}`)
}

async function deleteReview(req, res, next){
        const {rid} = req.params;
        const {pid} = req.params;

        await Review.findByIdAndDelete(rid);

        res.redirect(`/p1/product/singleProduct/${pid}`);
}

async function addToCart(req, res, next){
        const {pid} = req.params;

        const loggedInUser = req.user;

        loggedInUser.cart.push(pid);

        await loggedInUser.save();

        // res.send('data added to cart successfully');
        res.redirect('/p1/cart');
}

async function showCart(req, res, next){
    const loggedInUser = req.user;

    const populatedUserData = await loggedInUser.populate('cart');
    console.log(populatedUserData);

    const cartData = populatedUserData.cart;

    console.log(cartData);

    res.render('product/cart.ejs', {cartData});
}

module.exports = {showAllProducts, showSingleProduct, addProductPage, createProduct, editProduct, editProductPage, deleteProduct, createReview, deleteReview, addToCart, showCart}