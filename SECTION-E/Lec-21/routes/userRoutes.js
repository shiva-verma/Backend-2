const express = require('express');
const User = require('../model/userSchema');
const passport = require('passport');
const router = express.Router();

router.get('/login', (req, res)=>{
    res.render('user/login.ejs')
})

router.get('/register', (req, res)=>{
    res.render('user/register.ejs')
})

router.post('/register', async(req, res)=>{
    const {username, email, password, usertype} = req.body;

    const user = new User({username, email, usertype});

    await User.register(user, password);

    res.redirect('/u1/login');
})

router.post('/signIn', passport.authenticate('local', { failureRedirect: '/u1/login' }), (req, res)=>{
            res.redirect('/p1/products')
})

router.post('/logout', (req, res, next) => {
    req.logout((err) => {
      if (err) { 
        return next(err); 
      }
      res.redirect('/u1/login');
    });
  });

module.exports = router;


