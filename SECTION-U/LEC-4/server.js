const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'static')))
app.use(express.urlencoded({extended:true})) // to parse data from req.body

app.post('/info', (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;

    console.log(email)
    console.log(password)
    res.send('hiii')
})

app.get('/product/:p_id/:i_id', (req, res)=>{
    console.log(req.params.i_id);
    console.log(req.query.color);
    res.send("<img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg'>")
})

app.listen(2000, ()=>{
    console.log('server is running at port 2000')
})

