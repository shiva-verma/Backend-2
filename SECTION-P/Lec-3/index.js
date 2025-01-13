const express = require('express')
const app = express();
const path=require("path")

app.use(express.static(path.join(__dirname,"static")));
app.use(express.urlencoded({extended:true}));

// app.post('/information', (req,res)=>{

//     // const email = req.body.email
//     // const password = req.body.password
//     const {email, password} = req.body;

//     console.log(email)
//     console.log(password);

//     res.send(`Email is ${email} & password is ${password}`)
    
// })

app.get('/students/:section/:rollno', (req, res)=>{
    res.send(`section : ${req.params.section} & rollno : ${req.params.rollno}`);
})

app.listen(3000, () => {
    console.log("app is listning")
})