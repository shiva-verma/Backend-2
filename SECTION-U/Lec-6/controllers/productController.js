const showProduct = (req, res)=>{
    let person = {
        name:'shiv',
        age:24,
        contact:987654321
    }
        res.render('product.ejs', {person})
}

const createProduct = (req, res)=>{
    res.send("Product created")
}

const deleteProduct = (req, res)=>{
    res.send('product deleted');
}

module.exports = {showProduct, createProduct, deleteProduct};