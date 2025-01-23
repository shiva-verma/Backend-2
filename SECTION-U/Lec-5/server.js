const express = require('express');
const app = express();

//Read
app.get('/product', (req, res)=>{
    //logic
    console.log('All Products')
})

//create
app.post('/product/new', (req, res)=>{
    //logic
    console.log('Product Created successfully')
})

//update
app.put('/product/update/:p_id', (req, res)=>{
    //logic
    console.log('Product updated successfully')
})

//delete
app.delete('/product/delete/:p_id', (req, res)=>{
    //logic
    console.log('Product deleted successfully')
})

app.listen(5000, ()=>{
    console.log('server is running at port 5000')
})