const express = require('express');
const router = express.Router();

router.get('/login', (req, res)=>{
    res.render('users/login.ejs')
})

router.get('/register', (req, res)=>{
    res.render('users/signup.ejs')
})

router.post('/userdata', (req, res)=>{
    console.log(req.body);
    res.send('user register successfully')
})

module.exports = router;