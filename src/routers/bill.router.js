const BillController = require('../controllers/bill.controller');
const express = require('express');
const route = express.Router();


route.post('/new-bill',BillController.AddNewBill);

route.get('',BillController.GetAllBill);


module.exports = route;