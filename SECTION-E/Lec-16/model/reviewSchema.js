const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    comment:String,
    rating:Number
    
}, {timestamps:true})

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;