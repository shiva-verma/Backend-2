const express = require('express');
const router = express.Router();

router.get('/login', (req, res)=>{
    res.render('user/login.ejs')
})

router.get('/register', (req, res)=>{
    res.render('user/register.ejs')
})

router.post('/login/data', (req, res)=>{

    const {username, email, password} = req.body;


})

module.exports = router;