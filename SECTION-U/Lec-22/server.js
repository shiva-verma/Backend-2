const express = require('express');
const dbConnect = require('./database/db.js')
const productRoutes = require('./routes/productRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const methodOverride = require('method-override');
const ejs = require('ejs');
const ejsmate = require('ejs-mate');
const app = express();

dbConnect();
app.engine('ejs', ejsmate)
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(methodOverride('_method'));

app.use(express.urlencoded({extended:true}));

app.use(productRoutes);
app.use(userRoutes);

app.listen(2600, ()=>{
    console.log('server is running at port 2600')
})