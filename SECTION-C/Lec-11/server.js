const express = require('express');
const userRoutes = require('./routes/userRoutes.js');
const productRoutes = require('./routes/productRoutes.js');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/u1',userRoutes);
app.use('/p1',productRoutes);

app.listen(4000, ()=>{
    console.log('server is running at port 4000')
})