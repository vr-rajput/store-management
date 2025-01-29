const orderController = require('../controllers/order-controller');
const express = require('express');
const userOrder = express.Router();

userOrder.route('/').post(orderController?.order);

module.exports = userOrder;

