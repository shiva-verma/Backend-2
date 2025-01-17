const express = require('express');
const Users = require('../database/data.js')
const router = express.Router();

router.get('/user/all', (req, res)=>{
    res.send('All users')
})

router.get('/user/new', (req, res)=>{
        res.render('newUser');
})

router.post('/userdata', (req, res)=>{
    const {email, password, contact} = req.body

    const newUser = {
        email:email,
        password:password,
        contact:contact
    }

    Users.push(newUser);
    // console.log(Users)
    res.render('showUserData', {Users})
})


module.exports = router;