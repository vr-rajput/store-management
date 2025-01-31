const Razorpay = require('razorpay');
const config = require('../config/index')

const razorpay = new Razorpay({
  key_id: config.keyId,
  key_secret: config.secretKey
})

module.exports = razorpay;