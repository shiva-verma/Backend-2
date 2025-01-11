const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send("<a href='/product'>PRODUCT</a><br><a href='/product/order'>order</a>")
})

app.get('/product',(req, res)=>{
    res.send('product page')
})

app.get('/product/order',(req, res)=>{
    res.send('order page')
})

app.listen(3000, ()=>{
    console.log('server is running at port 3000')
})