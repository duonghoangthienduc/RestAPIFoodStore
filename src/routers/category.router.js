const category = require('../controllers/category.controller')
const express = require('express');
const router = express.Router();

router.get('',category.GetAll);
router.get('/:id',category.GetCategoryById);

module.exports = router;