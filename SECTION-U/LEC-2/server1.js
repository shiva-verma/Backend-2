const express = require('express');
const app = express()
const path = require('path')

app.get('/',(req, res)=>{
    // console.log(__dirname)
    res.sendFile(path.join(__dirname, '/home.html'))
    // res.send('hello')
})
app.get('/contact',(req, res)=>{
    // console.log(__dirname)
    res.sendFile(path.join(__dirname, '/home.html'))
    // res.send('hello')
})

app.get('/contact',(req, res)=>{
    res.send('<h1>CONTACT PAGE</h1>')
})

app.listen(5000, ()=>{
    console.log('server is running at port 5000')
})