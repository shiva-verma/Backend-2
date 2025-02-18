const express = require('express');
const Product = require('./model/productSchema.js');
const dbConnect = require('./database/data.js')
const methodOverride = require('method-override');
const path = require('path')

const app = express();

dbConnect();
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/product/new', (req, res)=>{
    res.render('addProduct.ejs');
})

app.post('/product', async(req, res)=>{
    await Product.create(req.body);
    res.redirect('/products/show');
    
    
})

app.get('/products/show', async(req, res)=>{
    const product = await Product.find({});
    res.render('ShowProducts', {Products:product});
})

app.delete('/product/delete/:id', async(req, res)=>{
    const pid = req.params.id;

    await Product.findByIdAndDelete(pid);

    res.redirect('/products/show')
})

app.get('/product/update/:id', async(req, res)=>{
     const pid = req.params.id;

     const product = await Product.findById(pid);

     res.render('editForm.ejs', {product})
})

app.put('/product/update/:id', async(req, res)=>{
    const {id} = req.params;

    // const product = Products.find((u)=>u.id == id);

    // const {productName, category, price} = req.body;

    // product.productName = productName;
    // product.category = category;
    // product.price = price;

    await Product.findByIdAndUpdate({id}, req.body)

    res.redirect('/products/show')
})

app.listen(7000, ()=>{
    console.log('server is running at port 7000')
})