const express = require('express');
const ejsmate = require('ejs-mate');
const userRoutes = require('./routes/userRoutes.js');
const productRoutes = require('./routes/productRoutes.js');
const methodOverride = require('method-override')
const dbConnect = require('./database/db.js')
const app = express();


dbConnect();
app.engine('ejs', ejsmate)
app.set('view engine', 'ejs');
app.set('views', './views')
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));

app.use('/u1', userRoutes);
app.use('/p1', productRoutes);

app.listen(5000, ()=>{
    console.log('server is running at port 5000')
})