const express = require('express');
const userRoutes = require('./routes/productRoutes.js')

const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, "static")))
app.use(userRoutes)

app.set('view engine', 'ejs');
app.set('views', './views');



app.listen(9000, ()=>{
    console.log('server is running ta port 9000')
})