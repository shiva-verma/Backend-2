const express = require('express');
const productRouter = require('./routes/productRoutes.js')
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views')

app.use(productRouter);



app.listen(8000, ()=>{
    console.log('server is running at port 8000')
})