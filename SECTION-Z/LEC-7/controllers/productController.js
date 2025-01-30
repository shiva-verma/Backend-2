///functionality

function showProduct(req, res){
    // res.send('PRODUCT SHOWN')
    res.render('product.ejs')
}

function createProduct(req, res){
    res.send('PRODUCT CREATED')
}

function updateProduct(req, res){
    res.send('PRODUCT UPDATED')
}

function deleteProduct(req, res){
    res.send('PRODUCT DELETED')
}

module.exports = {showProduct, createProduct, updateProduct, deleteProduct};