const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:String,
    category:String,
    price:Number,
    stock:Number
}, {timestamps:true})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;