const express = require('express');
const dbConnect = require('./database/db.js')
const productRoutes = require('./routes/productRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const methodOverride = require('method-override');
const ejs = require('ejs');
const ejsmate = require('ejs-mate');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./model/userSchema.js');
const app = express();

dbConnect();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

app.engine('ejs', ejsmate)
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(methodOverride('_method'));

app.use(express.urlencoded({extended:true}));

app.use(passport.initialize());
app.use(passport.session());
// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next)=>{
    res.locals.currUser = req.user
    next();
})

app.use(productRoutes);
app.use(userRoutes);

app.listen(2600, ()=>{
    console.log('server is running at port 2600')
})