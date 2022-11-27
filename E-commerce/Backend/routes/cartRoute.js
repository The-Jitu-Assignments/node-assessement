const { Router } = require('express');

const CartController = require('../controllers/cart/cart');

const router = Router();

router.get('/', CartController.getAllProductsInCart);

module.exports = router;