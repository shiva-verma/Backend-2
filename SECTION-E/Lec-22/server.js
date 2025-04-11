const express = require('express');
const ejsmate = require('ejs-mate');
const methodOverride = require('method-override');
const dbConnect = require('./database/db.js');
const userRoutes = require('./routes/userRoutes.js');
const productRoutes = require('./routes/productRoutes.js');
const User = require('./model/userSchema.js');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const flash = require('connect-flash');
const app = express();

dbConnect();
app.engine('ejs', ejsmate)
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        httpOnly: true,
        expiresIn : 60 * 60 * 1000
     }
}))

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.use(passport.authenticate('session'));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser()); //encryption 
passport.deserializeUser(User.deserializeUser()); //decryption

app.use((req, res, next)=>{
    res.locals.currUser = req.user
    res.locals.success = req.flash('success');
    res.locals.info = req.flash('info')
    next();
})

app.use('/u1', userRoutes);
app.use('/p1', productRoutes);

app.listen(3300, ()=>{
    console.log('server is running at port 3300')
})
