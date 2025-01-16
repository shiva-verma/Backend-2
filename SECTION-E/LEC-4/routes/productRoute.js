const express = require('express');
const router = express.Router();

//product api - endpoint
//READ
router.get('/product/showAll', (req, res)=>{
    res.send('All Product')
})

//CREATE
router.post('/product/create', (req, res)=>{
    res.send('Creating a new Product')
})

//UPDATE
router.put('/product/:id', (req, res)=>{
    res.send(req.params.id)
})

router.patch('/product/update/:id', (req, res)=>{
    res.send(req.params.id)
})

//DELETE
router.delete('/product/delete/:id', (req, res)=>{
        res.send(req.params.id)
})

module.exports = router;