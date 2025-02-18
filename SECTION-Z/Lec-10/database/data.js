const mongoose = require('mongoose');

function dbConnect(){
    //promise
    mongoose.connect('mongodb://localhost:27017/').then(()=>{
        console.log('db connected')
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = dbConnect;