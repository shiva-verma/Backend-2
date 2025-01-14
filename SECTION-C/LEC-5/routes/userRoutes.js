const express = require('express');
const router = express.Router();

//USER ROUTES - 
//to show all product
//READ
router.get('/user/all', (req, res)=>{
    res.send('All user')
})

//to add new Product
//CREATE
router.post('/user/new', (req, res)=>{

})

//to update existing product
//UPDATE
router.put('/user/:id', (req, res)=>{

})

//-----------------------------------

router.patch('/user/:id', (req, res)=>{
    
})

//to delete product
//DELETE
router.delete('/user/:id', (req, res)=>{

})

module.exports = router;

