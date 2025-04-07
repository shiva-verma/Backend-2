const express = require('express');
const User = require('../model/userSchema');
const passport = require('passport');
const router = express.Router();

router.get('/login', (req, res)=>{
    res.render('users/login.ejs')
})

router.get('/register', (req, res)=>{
    res.render('users/signup.ejs')
})

router.post('/userdata', async(req, res)=>{
    const {username, email, password, usertype} = req.body;

    const user = new User({username, email, usertype});

    await User.register(user, password);

    res.redirect('/u1/login')
})

router.post('/login', passport.authenticate('local', { failureRedirect: '/u1/register' }), (req, res)=>{
      res.redirect('/p1/products');
});

module.exports = router;