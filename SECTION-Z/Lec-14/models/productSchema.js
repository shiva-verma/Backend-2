const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productname:String,
    productdescription:String,
    productprice:Number,
    productImg:String
})

const Product = mongoose.model('product', productSchema);

module.exports = Product;