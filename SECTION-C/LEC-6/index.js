const express = require('express');
const userRoutes = require('./routes/userRoutes.js')
const productRoutes = require('./routes/productRoutes.js');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

let person = {
    name:"abcde",
    age: 24
}

app.get('/home', (req, res)=>{
    res.render('home', {person});
})
//application level middleware
// app.use(userRoutes);
// app.use(productRoutes);

//route level middleware
app.use('/u1', userRoutes);
app.use('/prod', productRoutes);


app.listen(4000, () => {
    console.log("app is listening on port 4000");
})