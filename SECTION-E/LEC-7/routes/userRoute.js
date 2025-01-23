const express = require('express');
const Users = require('../database/data.js')
const router = express.Router();
const { v4: uuidv4 } = require('uuid');


router.get('/user/all', (req, res)=>{
    res.render('showUserData', {Users})
})

router.get('/user/new', (req, res)=>{
        res.render('newUser');
})

router.post('/user', (req, res)=>{
    const {email, password, contact} = req.body

    const newUser = {
        id:uuidv4(),
        email:email,
        password:password,
        contact:contact
    }

    Users.push(newUser);
    console.log(Users)
    res.redirect('/u1/user/all')
})

router.delete('/user/delete/:id',(req, res)=>{
        const {id} = req.params;

        const user = Users.find((u) => u.id == id);

        const idx = Users.indexOf(user);

        Users.splice(idx, 1);

        res.redirect('/u1/user/all');
})


module.exports = router;