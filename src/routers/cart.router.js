const CartController = require('../controllers/cart.controller');
const express = require('express');
const route = express.Router();


route.post('/new-cart',CartController.AddCart);
route.get('/:id',CartController.GetById);
route.get('',CartController.GetAll);


module.exports = route;