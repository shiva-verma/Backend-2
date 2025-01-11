const express = require('express')
const app = express()

app.get('/greet',(req, res)=>{
    res.send("hello I am there")
})

app.get('/contact', (req, res)=>{
    res.sendFile('contact.html')
})

app.listen(3000)