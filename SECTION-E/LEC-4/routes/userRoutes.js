const express = require('express');
const router = express.Router();

//USER API - ENDPOINT
//READ
router.get('/user/showAll', (req, res)=>{
    res.send('All user')
})

//CREATE
router.post('/user/create', (req, res)=>{
    res.send('Creating a new user')
})

//UPDATE
router.put('/user/:id', (req, res)=>{
    res.send(req.params.id)
})

router.patch('/user/update/:id', (req, res)=>{
    res.send(req.params.id)
})

//DELETE
router.delete('/user/delete/:id', (req, res)=>{
        res.send(req.params.id)
})

module.exports = router;