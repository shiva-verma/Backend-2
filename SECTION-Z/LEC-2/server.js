const express = require('express');
const app = express();
const path = require('path')

app.get('/home', (req, res)=>{
    res.sendFile(path.join(__dirname ,'home.html'))
})

app.get('/contact', (req, res)=>{
    res.sendFile(path.join(__dirname ,'project.html'))
})

app.listen(9000, ()=>{
    console.log('server is running at port 9000')
})