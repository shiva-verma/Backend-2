const showAllProduct = (req, res)=>{
    res.send('All product')
}

const createProduct = (req, res)=>{
        res.send('product created')
}

const updateProduct = (req, res)=>{
    res.send(req.params.id);
}

const deleteProduct = (req, res)=>{
    res.send(req.params.id);
}

module.exports = {showAllProduct, createProduct, updateProduct,deleteProduct}