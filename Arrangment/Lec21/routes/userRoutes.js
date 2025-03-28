const express = require('express');
const User = require('../model/userSchema');
const passport = require('passport');
const router = express.Router();

router.get('/login', (req, res)=>{
    res.render('users/login.ejs');
})

router.get('/signup', (req, res)=>{
    res.render('users/signup.ejs');
})

router.post('/register', async(req, res)=>{
    const {username, email, password, usertype} = req.body;

    const user = new User({username, email, usertype});

    await User.register(user, password);

    res.redirect('/u1/login');
})

router.post('/login/password', passport.authenticate('local', {
    successRedirect: '/p1/products',
    failureRedirect: '/u1/login'
}));

router.post('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/u1/login');
    });
});

module.exports = router;