const express = require('express');
const router = express.Router();

router.get('/user/all', (req, res)=>{
    res.send('All user')
})

router.post('/user/new', (req, res)=>{

})

router.put('/user/:id', (req, res)=>{

})

router.patch('/user/:id', (req, res)=>{
    
})

router.delete('/user/:id', (req, res)=>{

})

module.exports = router;

