const express = require('express');
const router = express.Router();

router.get('/login', (req, res)=>{
    res.render('login.ejs');
})

router.get('/signup', (req, res)=>{
    res.render('signup.ejs');
})

module.exports = router;