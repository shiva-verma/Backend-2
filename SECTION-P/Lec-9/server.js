const express = require('express');
const ejsmate = require('ejs-mate');
// const userRoutes = require('./routes/userRoutes.js')
const dbConnect = require('./database/db.js')
const app = express();


dbConnect();
app.engine('ejs', ejsmate)
app.set('view engine', 'ejs');
app.set('views', './views')

// app.use(userRoutes)

app.listen(5000, ()=>{
    console.log('server is running at port 5000')
})