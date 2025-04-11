const passport = require('passport');

const isLoggedIn = (req, res, next)=>{
    if(!req.isAuthenticated()){
        return res.redirect('/u1/login')
    }
    next();
}

const isSeller = (req, res, next)=>{
    if(req.user?.usertype == "seller"){
        next();
    }
    return res.redirect("/p1/products");
}

module.exports = {isLoggedIn, isSeller}