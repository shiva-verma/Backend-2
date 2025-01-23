const express = require('express');
const router = express.Router();
const Users = require('../database/data.js')
const { v4: uuidv4 } = require('uuid');
import express from 'express';
const { addUserForm, createUser, showAllUser } = require('../controllers/userController.js');


router.get('/user/new', addUserForm);

router.post('/info', createUser);

router.get('/user/showall', showAllUser);

module.exports = router;