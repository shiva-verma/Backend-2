const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    
    email:{
        type:String,
        required:true
    },
    
    usertype:{
        type:String,
        required:true
    },
}, {timestamps:true});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);
module.exports = User;