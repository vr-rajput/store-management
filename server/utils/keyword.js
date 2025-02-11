const { HostNotFoundError } = require("sequelize")
const { order } = require("../controllers/order-controller")

const keyword = {
  auth: {
    register: 'user create successfull!',
    login: 'user login sunccessfuly !',
    allready: "user allready exist!",
    invalidCred: "Invalid credential",
    isverify: "email and password dose not exsit!",
    fields: "Fields must not be empty",
    message: "done!",
    payment: "Payment Successful !",
    order: 'Order processed',
    medicine: 'Medicine details are required',
  },
  order: {
    notFound: "Medicine not found",
    success: "Order processed successfully",
  },
  error: 'sothing went wrong !',
  fail: "payment Fail",

}

module.exports = { keyword }