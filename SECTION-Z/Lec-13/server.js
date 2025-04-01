const express = require('express');
const dbConnect = require('./database/db.js')
const ejsmate = require('ejs-mate')
const productRouter = require('./routes/productRoutes.js')
const app = express();

dbConnect();
app.engine('ejs', ejsmate);
app.set('view engine', 'ejs');
app.set('views', "./views");

app.use(express.urlencoded({extended:true}));

app.use(productRouter);

app.listen(7000, ()=>{
    console.log('server is running at port 7000');
})