const express = require('express');
// let Users = require('../database/data.js')
const User = require('../modals/userSchema.js');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

router.get('/user/showAll', async(req, res)=>{
      const users = await User.find({})
      res.render('showAllUser', {Users:users})
});

router.get('/user/new', (req, res)=>{
    res.render('newUser')
})

router.post('/userdata', async (req, res)=>{
    const {email, password, contact} = req.body;

    await User.create(req.body);

    // const newUser = {
    //     // id: uuidv4(),
    //     id: Users.length + 1,
    //     email:email,
    //     password:password,
    //     contact:contact
    // }

    // Users.push(newUser);
    // console.log(Users);
    res.redirect('/u1/user/showAll')
})

router.delete('/user/delete/:u_id', async(req, res)=>{
    const {u_id} = req.params;

    await User.findByIdAndDelete(id);

    //liner search
    // const user = Users.find((u) => u.id == u_id)

    //find user Index;
    // const idx = Users.indexOf(user);

    //splice single element
    // Users.splice(idx, 1);

    //filter 

    // const newUsers = Users.filter((u)=>{
    //         return u.id != u_id;
    // })

    // Users = newUsers;
    res.redirect('/u1/user/showall');
})

router.get('/user/update/:id', async(req, res)=>{
    const {id} = req.params;
    
    //const user = Users.find((u)=> u.id == id);

    const user = await User.findById(id)
    
    res.render('editForm.ejs', {user})
})

router.patch('/user/:id', async(req, res)=>{
    const {id} = req.params;
    
    const {email, password, contact} = req.body;

    // const user = Users.find((u)=> u.id == id);

    // user.email = email;
    // user.password = password;
    // user.contact = contact;

    await User.findByIdAndUpdate({id}, {email, password, contact});

    res.redirect('/u1/user/showall')

})


module.exports = router;