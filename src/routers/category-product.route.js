const productCategoryController = require('../controllers/productCategory.controllers');
const express = require('express');
const router = express.Router();

router.get('',productCategoryController.GetAll);
router.get('/:id', productCategoryController.GetProductsByCategory);

module.exports = router;