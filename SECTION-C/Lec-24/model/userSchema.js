const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    
    email:{
        type:String,
        required:true
    },
    
    userType:{
        type:String,
        enum:["buyer", "seller"]
    },
    cart:[
        {
          type:mongoose.Schema.Types.ObjectId,
          ref:"product"  
        }
    ],
    wishlist:[
        {
          type:mongoose.Schema.Types.ObjectId,
          ref:"product"  
        }
    ]
}, {timestamps:true});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);
module.exports = User;