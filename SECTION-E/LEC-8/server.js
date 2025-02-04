const express = require('express');
const userRoutes = require('./routes/userRoute.js');
const methodOverride = require('method-override');
const dbConnect = require('./database/data.js');
const path = require('path');
const app = express();

dbConnect();
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs')
app.set('views', './views');

app.use('/u1', userRoutes)

app.listen(3000, ()=>{
    console.log('server is running at port 3000')
})