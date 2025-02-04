const mongoose = require('mongoose');

async function dbConnect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/')
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnect;