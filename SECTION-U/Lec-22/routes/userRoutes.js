const express = require('express');
const User = require('../model/userSchema');
const router = express.Router();

router.get('/register', (req, res)=>{
    res.render('user/register.ejs');
})

router.get('/login', (req, res)=>{
    res.render('user/login.ejs');
})

router.post('/userdata', async(req, res)=>{
    console.log(req.body);

    await User.create(req.body);
})

module.exports = router;