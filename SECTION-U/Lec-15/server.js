const express = require('express');
const dbConnect = require('./database/db.js')
const productRoutes = require('./routes/productRoutes.js')
const ejs = require('ejs');
const ejsmate = require('ejs-mate');
const app = express();

dbConnect();
app.engine('ejs', ejsmate)
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended:true}));
app.use(productRoutes);

app.listen(7000, ()=>{
    console.log('server is running at port 7000')
})