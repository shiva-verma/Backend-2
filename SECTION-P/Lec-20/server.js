const express = require('express');
const ejsmate = require('ejs-mate');
const userRoutes = require('./routes/userRoutes.js');
const productRoutes = require('./routes/productRoutes.js');
const methodOverride = require('method-override')
const dbConnect = require('./database/db.js');
const session = require('express-session');
const LocalStrategy = require('passport-local');
const passport = require('passport');
const User = require('./model/userSchema.js');
const app = express();


dbConnect();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
         maxAge : 60*60*1000, 
         httpOnly:true
    }
  }))

app.engine('ejs', ejsmate)
app.set('view engine', 'ejs');
app.set('views', './views')
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/u1', userRoutes);
app.use('/p1', productRoutes);

app.listen(7000, ()=>{
    console.log('server is running at port 7000')
})