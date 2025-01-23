const express = require('express');
const userRoutes = require('./routes/userRoute.js');
const methodOverride = require('method-override');
const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs')
app.set('views', './views');

app.use('/u1', userRoutes)

app.listen(3000, ()=>{
    console.log('server is running at port 3000')
})