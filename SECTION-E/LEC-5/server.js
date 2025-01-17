const express = require('express')
const app = express();
const productRoutes = require('./routes/productRoute.js');
const userRoutes = require('./routes/userRoutes.js');

app.set('view engine', 'ejs');
app.set('views', './views');

let person = {
    name:"shiv",
    age:24
}

app.get('/home', (req, res)=>{
    res.render('home', {person})
})


//route level
app.use('/p1',productRoutes);
app.use('/u1',userRoutes);


app.listen(5000, ()=>{
    console.log('server is running at port 5000')
})