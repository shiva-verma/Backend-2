const express = require('express');
const userRoute = require('./routes/userRoutes.js');
const app = express();
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.set('views', './views')

app.use(userRoute);

app.listen(7000, ()=>{
    console.log('server is running at port 7000')
})