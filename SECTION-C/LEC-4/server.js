const express = require('express');
const app = express();

app.get('/product/:id([0-9])/:price', (req, res)=>{
    const {id, price} = req.params;
    console.log(id)
    console.log(price)
    res.send('hello');
})

app.get('/products', (req, res)=>{
    console.log(req.query);
    res.send('hiiiii')
})

app.listen(4000, ()=>{
    console.log('server is running at port 4000')
})