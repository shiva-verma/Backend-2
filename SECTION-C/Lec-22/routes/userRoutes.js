const express = require('express');
const User = require('../model/userSchema');
const passport = require('passport');
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('users/login.ejs');
})

router.get('/signup', (req, res) => {
  res.render('users/signup.ejs');
})

router.get(`/check`, (req, res) => {
  console.log(req.login)
  console.log(req.logout)
  res.send(`Please check`)
})

router.post('/register', async (req, res) => {
  try {
    const { username, email, password, userType } = req.body;
    const user = new User({ username, email, userType });
    // await User.create({username, email, password});
    const newUser = await User.register(user, password);

  } catch (error) {
    console.log(error);
    res.redirect('/u1/signup');
  }
})

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/u1/login' }),
  (req, res) => {
    res.redirect('/p1/products');
  });

router.post('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) { return next(err); }

    res.redirect('/u1/login');
  });
});


module.exports = router;