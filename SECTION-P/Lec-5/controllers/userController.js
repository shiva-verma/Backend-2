const addUserForm = (req, res)=>{
    res.render('newUser.ejs');
}

const createUser = (req, res)=>{
    const fullname = req.body.fullname;
    const email = req.body.email;
    const contact = req.body.contact;

    let newUser = {
        id: Users.length + 1,
        fullname:fullname,
        email:email,
        contact:contact
    }

    Users.push(newUser);
    console.log(Users)
    res.redirect('/user/showall');

}

const showAllUser = (req, res)=>{
    res.render('showAllUser', {Users});
}

module.exports = {addUserForm, createUser, showAllUser};