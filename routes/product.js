const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../routes/middleware');

router.use(authMiddleware);

router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;