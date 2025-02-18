const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name:{
        type:String,
        required:true,
        trim:true
    },
    category:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true
    },
    img:{
        type:String,
        required:true,
        trim:true
    },
    desc:{
        type:String,
        required:true,
        trim:true
    }
}, {timestamps:true})

const Product = mongoose.model('product', productSchema);

module.exports = Product;