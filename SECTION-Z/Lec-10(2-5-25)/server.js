const express = require('express');
const productRouter = require('./routes/productRoutes.js')
const methodOverride = require('method-override');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views')
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.use(productRouter);
//to parse data from req.body

app.listen(8000, ()=>{
    console.log('server is running at port 8000')
})