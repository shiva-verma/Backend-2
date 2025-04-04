const express = require('express');
const userRoutes = require('./routes/userRoutes.js')
const app = express();

app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.set('views', './views')

app.use('/u1', userRoutes);

app.listen(4000, ()=>{
    console.log('server is running at port 4000')
})