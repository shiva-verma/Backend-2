const express = require('express');
const app = express();
const isLoggedIn = require('./isLoggedIn.js')

function cb1(req, res, next){
    next()
}
function cb2(req, res, next){
    
}


app.get('/profile',[isLoggedIn , cb1], (req, res, next)=>{
    cb2()
    res.sendFile('profile.html')
})

app.listen(8000, ()=>{
    console.log('server is running at port 8000')
})