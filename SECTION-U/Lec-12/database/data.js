//promise
const mongoose = require('mongoose');

async function dbConnect(){
    try {
       await mongoose.connect('mongodb+srv://jztshiva:jztshiva@cluster0.0azte.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
       console.log("db connected")
    } catch (error) {
        console.log(error)
    } 
}


module.exports = dbConnect;