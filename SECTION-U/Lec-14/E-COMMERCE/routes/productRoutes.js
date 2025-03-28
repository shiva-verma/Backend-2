const express = require('express');
const { showAllProduct } = require('../controllers/productController');
const router = express.Router();

router.get('/products', showAllProduct)

module.exports = router;