const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email:String,
    usertype:String,
    cart:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"product"
        }
    ],
    
    isLike:Boolean
}, {timestamps:true})

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

module.exports = User;