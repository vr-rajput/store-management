const razorpay = require("../utils/razorpay");
const { keyword } = require("../utils/keyword");
const config = require('../config/index');
const crypto = require('crypto');
const { successResponse, errorResponse } = require("../utils/responseHandler");

const getway = async (req, res) => {
  try {
    console.log('called')
    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: `order_rcptid_${Date.now()}`
    }
    const order = await razorpay.orders.create(options);
    //console.log(order)
    //razorpay
    return successResponse(res, keyword.auth.payment, 200, order)
  } catch (error) {
    console.log(error)
    return errorResponse(res, error.message || keyword?.fail, error.statusCode || 401)
  }
}

//Verify Payment API
const paymentVerify = async (req, res) => {
  console.log('payment')
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const generated_signature = crypto.createHmac("sha256", config.secretKey)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex");

  if (generated_signature === razorpay_signature) {
    res.json({ success: true, message: "Payment verified successfully" });
  } else {
    res.status(400).json({ success: false, message: "Payment verification failed" });
  }
}

module.exports = {
  getway,
  paymentVerify
}