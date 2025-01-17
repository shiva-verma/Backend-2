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

app.set('view engine', 'ejs');
app.set('views', './views')

app.use(productRoutes);

let arr = [
    {
        name:'abcde',
        age:24
    },
    {
        name:'efgh',
        age:35
    }
]

app.use('/home', (req, res)=>{
    res.render('home.ejs', {arr})
})


app.listen(9000, ()=>{
    console.log('server is running at port 9000')
})