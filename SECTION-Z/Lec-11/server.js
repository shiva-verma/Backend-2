const express = require('express');
const dbConnect = require('./database/db.js')
const app = express();


dbConnect();
app.listen(7000, ()=>{
    console.log('server is running at port 7000');
})