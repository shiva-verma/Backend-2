const express = require('express')
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'static')))

app.get('/home',(req, res)=>{
    // console.log()
    // res.sendFile(path.join(__dirname , '/home.html'))
    // res.send('hello')
})

app.get('/script.js',(req, res)=>{
    res.send('script');
})

app.listen(7000, ()=>{
    console.log('server is running at port 7000')
})