const { Router } = require('express');

const userController = require('../controllers/users/users');
const router = Router();

router.post('/signup', userController.signUp);
router.post('/login', userController.login);

module.exports = router;