const express = require('express');
const ejsmate = require('ejs-mate');
const dbConnect = require('./database/db.js');
const userRoutes = require('./routes/userRoutes.js');
const app = express();

dbConnect();
app.engine('ejs', ejsmate)
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/u1', userRoutes);

app.listen(7000, ()=>{
    console.log('server is running at port 7000')
})