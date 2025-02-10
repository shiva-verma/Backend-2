const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:String,
    password:String,
    contact:Number
})

const User = mongoose.model('user', userSchema);

module.exports = User;