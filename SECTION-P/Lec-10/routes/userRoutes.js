const express = require('express');
const router = express.Router();

router.get('/login', (req, res)=>{
    res.render('users/login.ejs')
})

router.get('/register', (req, res)=>{
    res.render('users/signup.ejs')
})

module.exports = router;