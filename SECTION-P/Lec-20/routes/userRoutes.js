const express = require('express');
const User = require('../model/userSchema');
const passport = require('passport');
const router = express.Router();

// Render login page
router.get('/login', (req, res) => {
    res.render('users/login.ejs');
});

// Render registration page
router.get('/register', (req, res) => {
    res.render('users/signup.ejs');
});

// Handle registration
router.post('/userdata', async (req, res) => {
    const { username, email, password, usertype } = req.body;

    try {
        const user = new User({ username, email, usertype });
        await User.register(user, password);
        res.redirect('/u1/login');
    } catch (err) {
        console.log(err);
        res.redirect('/u1/register');
    }
});

// Handle login
router.post(
    '/signIn',
    passport.authenticate('local', {
        failureRedirect: '/u1/login', // Redirect to login on failure
        failureFlash: true           // Enable flash messages if using connect-flash
    }),
    (req, res) => {
        res.redirect('/p1/products');
    }
);

module.exports = router;
