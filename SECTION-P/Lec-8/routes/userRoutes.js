const express = require('express');
const router = express.Router();
const { addUserForm, createUser, showAllUser, deleteUser, showEditForm, updateUser } = require('../controllers/userController.js');

router.get('/user/new', addUserForm);

router.post('/info', createUser);

router.get('/user/showall', showAllUser);

router.delete('/user/delete/:id', deleteUser)

router.get('/user/update/:id', showEditForm);

router.patch('/user/update/:id', updateUser);

module.exports = router;