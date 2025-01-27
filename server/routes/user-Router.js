const express = require('express');
const userControllers = require('../controllers/user-controller');
const verifyToken = require('../middleware/authMiddleware');
const userRouter = express.Router();


userRouter.route('/register').post(userControllers?.userCreate);
userRouter.route('/login').post(userControllers?.loginUser);
userRouter.route('/').get(verifyToken, userControllers?.getAllUser)
userRouter.route('/profile').get(verifyToken, userControllers?.getUserProfile)

module.exports = userRouter;