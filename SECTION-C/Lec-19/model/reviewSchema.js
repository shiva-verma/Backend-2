const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    comment:{
        type:String,
        required:true,
        trim:true
    },
    rating:{
        type:Number,
        min:1,
        max:5,
        required:true
    }
    
},{timestamps:true})

const Review = mongoose.model('Review' , reviewSchema);
module.exports = Review;
