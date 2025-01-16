const express = require('express')
const app = express();
const productRoutes = require('./routes/productRoute.js');
const userRoutes = require('./routes/userRoutes.js');

function cb1(req, res, next){
    console.log('first callback');
    next();
}

// app.use('/cb',cb1);

//Application level
// app.use(productRoutes);
// app.use(userRoutes);

//route level
app.use('/p1',productRoutes);
app.use('/u1',userRoutes);

function isLoggedIn(req, res, next){
    //logic
    next()
}

function isMatched(req, res, next){
    //logic
    next()
}

app.get('/profile', [isLoggedIn, isMatched], (req, res)=>{
    res.sendFile('profile.html')
})


app.listen(5000, ()=>{
    console.log('server is running at port 5000')
})