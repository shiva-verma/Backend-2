const express = require('express');
const User = require('../model/userSchema.js')
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

router.get('/user/all', async(req, res)=>{
    try {
        const user = await User.find({});
        console.log(user);
        res.render('showUserData', {User:user})
    } catch (error) {
        console.log(error)
    }
})

router.get('/user/new', (req, res)=>{
        res.render('newUser');
})

router.post('/user', async(req, res)=>{
    await User.create(req.body);
    res.redirect('/u1/user/all')
})

router.delete('/user/delete/:id', async(req, res)=>{
        const {id} = req.params;
        await User.findByIdAndDelete(id);

        res.redirect('/u1/user/all');
})


router.get('/user/update/:id', async(req, res)=>{
    const {id} = req.params;
    const user = await User.findById(id);

    res.render('updateForm.ejs', {user});
})

router.put('/user/update/:id', async(req, res)=>{
    const {id} = req.params;
    const {email, password, contact} = req.body;

    await User.findByIdAndUpdate(id, req.body);

    res.redirect('/u1/user/all')
})


module.exports = router;