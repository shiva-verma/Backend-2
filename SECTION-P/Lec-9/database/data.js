// let users = [];

// module.exports = users;

const mongoose = require('mongoose');

async function dbConnect(){
    try {
       await mongoose.connect();
       console.log('db connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnect;