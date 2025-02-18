///functionality

const Product = require('../model/productSchema.js')

function showAddForm(req, res){
    res.render('product.ejs')
}

async function createProduct(req, res){
    // const email = req.body.email;
    // const password = req.body.password;

    // const newUser = {
    //     id:Product.length + 1,
    //     email:email,
    //     password:password
    // }

    // Product.push(newUser);
    // console.log(Product);
    await Product.create(req.body);
    res.redirect('/product/show');
    
}


async function showProduct(req, res){
    const product = await Product.find({});
    res.render('showProduct.ejs',{Product:product});
}

async function deleteProduct(req, res){
    const {id} = req.params;
    
    // const pro = Product.find((u)=>u.id == id);

    // let idx = Product.indexOf(pro);

    // Product.splice(idx, 1);

    await Product.findByIdAndDelete(id);

    res.redirect('/product/show')
}

function updateProduct(req, res){
    res.send('PRODUCT UPDATED')
}


module.exports = {showProduct,createProduct, updateProduct, deleteProduct, showAddForm};