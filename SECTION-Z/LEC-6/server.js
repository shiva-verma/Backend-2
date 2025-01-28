const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.set('views', './views')

//read
app.get('/product/show', (req, res)=>{
    // res.send('PRODUCT SHOWN')
    res.render('product.ejs')
})

//create
app.post('/product/create', (req, res)=>{
    res.send('PRODUCT CREATED')
})

//update
app.put('/product/update', (req, res)=>{
    res.send('PRODUCT UPDATED')
})

//delete
app.delete('/product/delete', (req, res)=>{
    res.send('PRODUCT DELETED')
})

app.listen(8000, ()=>{
    console.log('server is running at port 8000')
})