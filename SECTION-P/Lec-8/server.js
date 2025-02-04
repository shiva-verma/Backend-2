const express = require('express');
const dbConnect = require('./database/data.js');
const userRoute = require('./routes/userRoutes.js');
const methodOverride = require('method-override');
const path = require('path')

const app = express();

dbConnect();
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))
app.set('view engine', 'ejs');
app.set('views', './views')

app.use(userRoute);

app.listen(7000, ()=>{
    console.log('server is running at port 7000')
})