const { Router } = require('express');

const ProductsController = require('../controllers/products');

const router = Router();

router.get('/', ProductsController.getAllProducts);
router.get('/:id', ProductsController.getASingleProduct);
router.post('/', ProductsController.createProduct);

module.exports = { router }