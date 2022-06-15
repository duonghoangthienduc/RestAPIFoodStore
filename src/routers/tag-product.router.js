const productTagController = require('../controllers/productTag.controller');
const express = require('express');
const router = express.Router();

router.get('/',productTagController.GetAll);
router.get('/:id',productTagController.GetByTag);
router.get('/product-tag/:id',productTagController.GetByProduct);

module.exports = router;