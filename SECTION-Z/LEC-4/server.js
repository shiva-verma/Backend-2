const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:true})); //to parse data from req.body

app.post('/info', (req, res)=>{
    console.log(req.body)
    res.send('hiiii')
})

app.listen(8000, ()=>{
    console.log('server is runningat port 8000')
})