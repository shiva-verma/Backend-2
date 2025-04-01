const express = require('express');
const ejsmate = require('ejs-mate');
const userRoutes = require('./routes/userRoutes.js');
const productRoutes = require('./routes/productRoutes.js');
const methodOverride = require('method-override')
const dbConnect = require('./database/db.js');
const session = require('express-session');
const LocalStrategy = require('passport-local');
const app = express();


dbConnect();

app.use(session({
    secretKey:"abcde",
    resave: false,
    saveUninitialized: true,
}))

app.engine('ejs', ejsmate)
app.set('view engine', 'ejs');
app.set('views', './views')
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));

passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/u1', userRoutes);
app.use('/p1', productRoutes);

app.listen(7000, ()=>{
    console.log('server is running at port 7000')
})