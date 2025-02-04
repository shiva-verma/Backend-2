// let User = [];

// module.exports = User;

const mongoose = require('mongoose');

async function dbConnect(){
    try {
      await mongoose.connect('mongodb+srv://jztshiva:jztshiva@cluster0.zezpi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
      console.log('db conected')
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnect;
