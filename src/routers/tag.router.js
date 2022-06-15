const tagController = require('../controllers/tag.controller');
const express = require('express');
const router = express.Router();

router.post('/add-new-tag',tagController.AddTag);
router.put('/:id/update-tag',tagController.UpdateTag);
router.get('/:id',tagController.GetTag);
router.get('/',tagController.getAllTag);

module.exports = router;