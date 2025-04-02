const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true,
        trim:true
    },
    productdesc:String,
    productcate:String,
    productprice:Number,
    productImg:String,
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            refs:"review"
        }
    ]
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;