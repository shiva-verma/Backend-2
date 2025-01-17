const showAllProduct =  (req, res)=>{
    res.render('product.ejs')
}

const createProduct = (req, res)=>{
    res.send('New products Created')
}

const updateProduct = (req, res)=>{
    res.send('products updated')
}

const deleteProduct = (req, res)=>{
    res.send('products deleted')
}

module.exports = {showAllProduct, createProduct, updateProduct, deleteProduct}