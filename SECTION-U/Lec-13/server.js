const express = require('express');
const dbConnect = require('./database/db.js')
const productRoutes = require('./routes/productRoutes.js');
const app = express();

dbConnect();

app.use(productRoutes);

app.listen(6000, ()=>{
    console.log("server is running at port 6000")
})