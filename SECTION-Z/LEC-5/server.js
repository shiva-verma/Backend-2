const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}));

app.post('/userdata', (req, res)=>{
    const {email, contact, password} = req.body;
    res.send("hello")
})

app.get('/product/:id/:price', (req, res)=>{
    const id = req.params.id;
    const price = req.params.price;
    console.log(req.query);
    res.send(`product id : ${id} & product price is : ${price}`)
})

app.listen(5000, ()=>{
    console.log('server is running at port 5000')
})