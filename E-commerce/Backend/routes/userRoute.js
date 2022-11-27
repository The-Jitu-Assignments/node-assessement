const { Router } = require('express');

const userController = require('../controllers/users/users');
const router = Router();

router.post('/signup', userController.signUp);

module.exports = router;