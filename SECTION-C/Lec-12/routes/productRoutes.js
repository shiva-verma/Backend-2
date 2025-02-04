const express = require('express');
const router = express.Router();

router.get('/products', (req, res)=>{
    res.render('Home.ejs');
})

module.exports = router;