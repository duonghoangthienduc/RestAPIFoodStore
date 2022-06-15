const CartItemController = require('../controllers/cartItem.controller');
const express = require('express');
const route = express.Router();


route.post('/add-item',CartItemController.AddCartItem)
route.get('/:id',CartItemController.GetItem);

route.get('',CartItemController.GetAll);


module.exports = route;