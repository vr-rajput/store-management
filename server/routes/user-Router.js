const express = require('express');
const userRouter = express.Router();
// const userCreate = require('../controllers/user-controller');
const userControllers = require('../controllers/user-controller');

userRouter.route('/register').post(userControllers?.userCreate);
userRouter.route('/login').post(userControllers?.loginUser);

module.exports = userRouter;