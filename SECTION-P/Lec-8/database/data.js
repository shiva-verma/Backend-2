// let User = [];

// module.exports = User;

const mongoose = require('mongoose');

async function dbConnect(){
    try {
      await mongoose.connect()
      console.log('db conected')
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnect;
