const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    email:String,
    password:String,
},{timestamps:true})

const Product = mongoose.model('product', productSchema);

module.exports = Product;