const express = require('express')
const app = express();

app.get('/product/:id/:price', (req, res)=>{
    console.log(req.params.id);
    console.log(req.params.price);

    database(req.params.id);
    res.send('hello')
})

app.get('/products/:id',(req, res)=>{
    console.log(req.query);
    console.log(req.params)
    res.send('hiiiiiiii')
})

app.listen(2000, ()=>{
    console.log('server is running at port 2000')
})