const express = require('express');
const ejsmate = require('ejs-mate');
const dbConnect = require('./database/db.js')
const methodOverride = require('method-override');
const userRoutes = require('./routes/userRoutes.js');
const productRoutes = require('./routes/productRoutes.js');
const session = require('express-session');
const path = require('path');
const User = require('./model/userSchema.js');
const passport = require('passport');
const app = express();

dbConnect();
app.engine('ejs', ejsmate);
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    secret: 'keyboard cat',
    cookie: { 
        httpOnly:true,
        secure: true,
        maxAge: 10000,
     }
  }))

app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'static')))
app.use(express.urlencoded({extended:true}));

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next)=>{
    res.locals.currUser = req.user;
    next();
})

app.use('/u1',userRoutes);
app.use('/p1',productRoutes);

app.listen(9000, ()=>{
    console.log('server is running at port 9000')
})