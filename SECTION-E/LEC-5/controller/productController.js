const showAllProduct = (req, res)=>{
    res.send('All Product')
}

const createProduct = (req, res)=>{
    res.send('Creating a new Product')
}

const updateProduct = (req, res)=>{
    res.send(req.params.id)
}

const deleteProduct =  (req, res)=>{
    res.send(req.params.id)
}

module.exports = {showAllProduct,createProduct,updateProduct,deleteProduct}