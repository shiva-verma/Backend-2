const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    
    product_id:{
        type:String,
        required:true,
        trim:true,
    },
    product_name:{
       type:String,
       trim:true,
       required:true 
    },
    product_desc:{
        type:String,
        trim:true,
        required:true 
    },
    product_ctg : {
        type:String,
        trim:true,
        required:true 
    },
    product_price : {
        type:Number,
        trim:true,
        required:true,
        min:0.01
    },
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Review'
    }]
},{timestamps:true})

const Product = mongoose.model('product' , productSchema);
module.exports = Product;
