const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:String,
    password:String,
    contact:Number,
},{timestamps:true})

const User = mongoose.model('user', userSchema);

module.exports = User;