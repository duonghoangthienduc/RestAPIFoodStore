const productController = require('../controllers/product.controller');
const express = require('express');
const router = express.Router();

router.post('/add-new-product',productController.AddProduct);
router.put('/:id/update-product',productController.UpdateProduct);
router.get('/:id',productController.GetProduct);
router.get('/',productController.GetAllProduct);

module.exports = router;

