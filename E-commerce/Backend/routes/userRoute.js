const { Router } = require('express');

const userController = require('../controllers/users/users');
const router = require('./productsRoute');

router.post('/signup', userController.signUp);