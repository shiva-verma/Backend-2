const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:{
        type:String
    },
    category:String,
    price:Number,
    stock:Number,
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Review"
        }
    ]
}, {timestamps:true})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;