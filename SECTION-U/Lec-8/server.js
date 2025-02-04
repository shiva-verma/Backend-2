const express = require('express');
const Products = require('./database/data.js');
const methodOverride = require('method-override');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/product/new', (req, res)=>{
    res.render('addProduct.ejs');
})

app.post('/product', (req, res)=>{
    const {productName, category, price} = req.body;
    
    const newProduct = {
        id:Products.length + 1,
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

app.delete('/product/delete/:id', (req, res)=>{
    const pid = req.params.id;

    const product = Products.find((u)=> u.id == pid);

    const idx = Products.indexOf(product);

    Products.splice(idx, 1);

    res.redirect('/products/show')
})

app.listen(7000, ()=>{
    console.log('server is running at port 7000')
})