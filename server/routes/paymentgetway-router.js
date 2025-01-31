const express = require('express');
const paymentGetway = express.Router();
const pementGetwayControllers = require('../controllers/paymentgetway-controller')


paymentGetway.route('/create-order').post(pementGetwayControllers.getway);
paymentGetway.route('/verify').post(pementGetwayControllers.paymentVerify)

module.exports = { paymentGetway }