const { Router } = require('express');

const ProductsController = require('../controllers/products/products');

const router = Router();

router.get('/', ProductsController.getAllProducts);
router.get('/:id', ProductsController.getASingleProduct);
router.post('/', ProductsController.createProduct);
router.put('/:id', ProductsController.updateProduct);

module.exports = { router }