///functionality

const Product = require('../database/data.js');

function showAddForm(req, res){
    res.render('product.ejs')
}

function createProduct(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const newUser = {
        id:Product.length + 1,
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

function deleteProduct(req, res){
    const {id} = req.params;
    
    const pro = Product.find((u)=>u.id == id);

    let idx = Product.indexOf(pro);

    Product.splice(idx, 1);

    res.redirect('/product/show')
}


function showEditForm(req, res){
    const {id} = req.params;
    
    const product = Product.find((p)=> p.id == id)
    res.render('updateForm.ejs', {product});
}

function updateProduct(req, res){
    const {id} = req.params;

    const product = Product.find((p)=> p.id == id)

    const {email, password} = req.body;

    product.email = email;
    product.password = password;

    res.redirect('/product/show');


}

module.exports = {showProduct,createProduct, updateProduct, deleteProduct, showAddForm, showEditForm};