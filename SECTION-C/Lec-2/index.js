const express = require('express');
const app = express();
const path = require('path')
// const bcrypt = require('bcrypt')

app.use(express.static(path.join(__dirname,'static')))
app.use(express.urlencoded({extended:true}));

app.get('/home', (req, res)=>{
    // res.sendFile(path.join(__dirname , '/home.html'))
    // console.log()
    // res.send('hello')
})


app.post('/information',(req, res) =>{
    const {email, password} = req.body;
    console.log(email)
    console.log(password)
    res.send('hello')
})

app.listen(4000, ()=>{
    console.log('server is running on port 4000')
})