const express = require('express');
const User = require('../model/userSchema');
const passport = require('passport');
const router = express.Router();

router.get('/register', (req, res)=>{
    res.render('user/register.ejs');
})

router.get('/login', (req, res)=>{
    res.render('user/login.ejs');
})

router.post('/userdata', async(req, res)=>{
    const {username, email, password, usertype} = req.body;

    const user = new User({username, email, usertype});

    await User.register(user, password);

    res.redirect('/login');
})

router.post('/signIn', 
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
     console.log(req.user)
      res.redirect('/showAllproduct');
});

router.post('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      console.log(req.user);
      res.redirect('/login');
    });
  });

module.exports = router;