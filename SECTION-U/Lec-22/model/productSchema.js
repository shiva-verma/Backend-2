const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:String,
    productdesc:String,
    productcate:String,
    productprice:Number,
    productImg:String,
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"review"
        }
    ]
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;