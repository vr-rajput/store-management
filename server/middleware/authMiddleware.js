const jwt = require('jsonwebtoken');
const config = require('../config/index')
const logger = require('../utils/logger')
const { errorResponse } = require('../utils/responseHandler')
const CustomError = require('../exceptions/duplicateError');


const verifyToken = (req, res, next) => {
  try {

    const authHeader = req.headers?.authorization;
    if (req.url.includes('/mgt/admin/')) {
      console.log("admin router accessed !")
      next();
    } else {

      if (!authHeader) {
        return errorResponse(res, "Token note Found", 500)
      }
      // const authHeader = req.headers.authorization;
      const token = authHeader.split(' ')[1];
      if (!token) {
        // throw new CustomError("Token note Found", 401)
        return errorResponse(res, "Unauthorized user", 401)
      }
      jwt.verify(token, config.privetKey, (err, user) => {
        if (err) {
          // logger.error('Invalid token');
          return errorResponse(res, "Invalid token", err.message, 401)
        }
        req.user = user; //Attach user info to the request
        next();
      })
    }

  } catch (error) {
    //logger.error('No token provided');
    return errorResponse(res, 'Invalid Token', 403);
  }
}

module.exports = verifyToken;