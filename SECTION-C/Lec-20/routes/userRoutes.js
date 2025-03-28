const express = require('express');
const User = require('../model/userSchema');
const router = express.Router();

router.get('/login', (req, res)=>{
    res.render('users/login.ejs');
})

router.get('/signup', (req, res)=>{
    res.render('users/signup.ejs');
})

router.post('/signup', async(req, res)=>{
//     const {name, email, password, usertype} = req.body;

//    const hashedPassword = bcrypt.hashSync(password, 10);
    
//     await User.create({
//         name,
//         password:hashedPassword,
//         email, usertype
//     });

})

module.exports = router;