const express = require('express');
const app = express();
const path = require('path')


app.use(express.static(path.join(__dirname, 'static')))
app.use(express.urlencoded({extended:true}))

app.post('/information', (req, res)=>{
     console.log(req.body.email);
     res.send('hello')
})


// app.get('/home', (req, res)=>{
//     res.sendFile(path.join(__dirname, '/home.html'))
// })

// app.get('/script.js', (req, res)=>[

// ])

app.listen(3000, ()=>{
    console.log('server is running at port 3000')
})