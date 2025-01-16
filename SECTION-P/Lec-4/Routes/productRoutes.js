const express = require('express');
const router = express.Router();

router.get('/products/all', (req, res)=>{
    res.send('All products')
})

router.post('/products/new', (req, res)=>{
res.send('New products Created')
})

router.put('/products/:id', (req, res)=>{
res.send('products updated')
})

router.patch('/products/:id', (req, res)=>{
res.send('products updated')
})

router.delete('/products/:id', (req, res)=>{
res.send('products deleted')
})

module.exports = router;