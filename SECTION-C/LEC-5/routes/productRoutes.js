const express = require('express');
const router = express.Router();

//to show all product
//READ
router.get('/product/all', (req, res)=>{
    res.send('All product')
})

router.get('/product/:id', (req, res)=>{
        res.send(req.params.id)
})

//to add new Product
//CREATE
router.post('/product/new', (req, res)=>{

})

//to update existing product
//UPDATE
router.put('/product/:id', (req, res)=>{
    res.send(req.params.id);
})

//-----------------------------------

router.patch('/product/:id', (req, res)=>{
    res.send(req.params.id);
})

//to delete product
//DELETE
router.delete('/product/:id', (req, res)=>{
        res.send(req.params.id);
})


module.exports = router;