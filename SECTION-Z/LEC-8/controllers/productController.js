///functionality

const Product = require('../database/data.js');

function showAddForm(req, res){
    res.render('product.ejs')
}

function createProduct(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const newUser = {
        email:email,
        password:password
    }

    Product.push(newUser);
    console.log(Product);
    res.redirect('/product/show');
    
}


function showProduct(req, res){
    res.render('showProduct.ejs',{Product});
}

function updateProduct(req, res){
    res.send('PRODUCT UPDATED')
}

function deleteProduct(req, res){
    res.send('PRODUCT DELETED')
}

module.exports = {showProduct,createProduct, updateProduct, deleteProduct, showAddForm};