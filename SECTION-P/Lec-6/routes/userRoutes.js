const express = require('express');
const router = express.Router();
const { addUserForm, createUser, showAllUser, deleteUser } = require('../controllers/userController.js');

router.get('/user/new', addUserForm);

router.post('/info', createUser);

router.get('/user/showall', showAllUser);

router.delete('/user/delete/:id', deleteUser)

module.exports = router;