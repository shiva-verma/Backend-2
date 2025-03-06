const express = require('express');
const router = express.Router();

//GET, POST, PUT, PATCH, DELETE

//1. show all product in database - GET
router.get('/products', (req, res)=>{

})
//2. show single product on a page - GET
router.get('/product/single/:id', (req, res)=>{
    
})
//3. show add product form page - GET
router.get('/product/add', (req, res)=>{
    
})
//4. creation of product from form data - POST
router.post('', (req, res)=>{
    
})
//5. show update product form page - GET
router.get('/product/edit', (req, res)=>{
    
})
//6. update product from form data - PUT
router.put('', (req, res)=>{
    
})
//7. delete product - DELETE
router.delete('/product/delete/:id', (req, res)=>{
    
})

module.exports = router;