const express = require('express')
const path = require('path')
const app = express();


app.get('/home', (req, res)=>{
        // console.log(__dirname);
        res.send("hello");
        res.sendFile(path.join(__dirname + '/home.html'))
})

app.listen(4000, ()=>{
    console.log('server is running at port 4000')
});