const express = require('express');
const app = express();

app.get('/home', (req, res)=>{
    console.log(req.url);
    res.send('<h1>Home Page</h1>')
})

app.listen(4000, ()=>{
    console.log('server is running at port 4000')
})

