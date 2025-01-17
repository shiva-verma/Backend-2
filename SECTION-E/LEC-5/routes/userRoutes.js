const express = require('express');
const { showAllUser, createUser, updateUser, deleteUser } = require('../controller/userController');
const router = express.Router();

router.get('/user/showAll', showAllUser)

router.post('/user/create', createUser)

router.patch('/user/update/:id', updateUser)

router.delete('/user/delete/:id',deleteUser)

module.exports = router;