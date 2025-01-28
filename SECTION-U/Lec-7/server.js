const express = require('express');
const Products = require('./database/data.js')
const app = express();

app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/product/new', (req, res)=>{
    res.render('addProduct.ejs');
})

app.post('/product', (req, res)=>{
    const {productName, category, price} = req.body;
    
    const newProduct = {
        productName:productName,
        category:category,
        price:price
    }

    Products.push(newProduct);
    console.log(Products);
    res.redirect('/products/show');
    // res.send('Product added successfully');
    
})

app.get('/products/show', (req, res)=>{
    res.render('ShowProducts', {Products});
})

app.listen(7000, ()=>{
    console.log('server is running at port 7000')
})