async function showAllProducts(req, res){
    res.render('product/home.ejs')
}

async function showSingleProduct(req, res){
    res.render('product/singleProduct.ejs')
}

async function addProductPage(req, res){
    res.render('product/addProduct.ejs')
}

async function createProduct(req, res){
    
}

async function editProductPage(req, res){
    res.render('product/updateProduct.ejs')
}

async function editProduct(req, res){
    
}

async function deleteProduct(req, res){
    
}

module.exports = {showAllProducts, showSingleProduct, addProductPage, createProduct, editProduct, editProductPage, deleteProduct}