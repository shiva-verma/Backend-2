const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/information', (req, res)=>{
    res.send('hello');
})

app.listen(9000, ()=>{
    console.log('server is running at port 9000')
})