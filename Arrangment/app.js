const express = require('express')
const app = express();

app.get('/',(req, res)=>{
    res.send('<h1> HOME PAGE</h1>')
})

app.get('/contact',(req, res)=>{
    res.send('<h1>CONTACT PAGE</h1>')
})
app.get('/about',(req, res)=>{
    res.send('<h1>ABOUT PAGE</h1>')
})

app.listen(7000,()=>{
    console.log('server is running at port 6000')
})