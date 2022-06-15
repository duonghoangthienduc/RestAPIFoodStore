const userController = require('../controllers/user.controller');
const express = require('express');
const router = express.Router();

router.post('/signin',userController.getLogging);
router.post('/registerCustomer',userController.AddNewCustomer);
router.get('/getCustomers',userController.getCustomer)
router.get('',userController.getUser);

module.exports = router;