const express = require('express');
const productRoutes = require('./Routes/productRoutes.js')
const app = express();

// app.get('/students/:section/:rollno', (req, res)=>{
//         res.send(`Section :${req.params.section} & Roll no : ${req.params.rollno}`)
// })

// app.get('/products/:id', (req, res)=>{
//     console.log(req.query);
//     console.log(req.params)
//     res.send('hiii')
// })

app.use(productRoutes);


app.listen(9000, ()=>{
    console.log('server is running at port 9000')
})