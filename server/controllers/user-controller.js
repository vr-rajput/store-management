const jwt = require('jsonwebtoken');
const userRepository = require('../dao/user-Repository');
const { successResponse, errorResponse } = require('../utils/responseHandler')
const { keyword } = require('../utils/keyword');
const bcrypt = require('bcrypt');
const config = require('../config/index')
const logger = require('../utils/logger')
const CustomError = require('../exceptions/duplicateError');
const saltRounds = 10;

// create User
const userCreate = async (req, res) => {
  try {
    const { storeName, userName, email, password, address, number } = req.body;

    // Validate input fields
    if (!email || !storeName || !password) {
      throw new CustomError(keyword?.auth.fields, 409)
    }
    const user = await userRepository.getBuyEmail({ storeName, email });
    if (user) {
      throw new CustomError(keyword?.auth?.allready)
    }
    const userPassword = await bcrypt.hash(password, saltRounds);
    const userInfo = {
      storeName,
      userName,
      email,
      password: userPassword,
      address,
      number
    }
    await userRepository.createUser(userInfo);
    const token = jwt.sign({ storeName: storeName, email: email }, config.privetKey, { expiresIn: '1h' })
    return successResponse(res, keyword?.auth?.register, 201, { token })
  } catch (error) {
    logger.error(`Error creating user: ${error.message}`);
    return errorResponse(res, error.message || keyword?.error, error.statusCode || 401)
  }
}

// Login User
const loginUser = async (req, res) => {
  try {
    const { email, password, storeName } = req.body;
    if (!email || !password || !storeName) {
      throw new CustomError(keyword?.auth.fields, 409);
    }
    const user = await userRepository.getByStore(storeName, email);
    if (!user?.dataValues) {
      throw new CustomError(keyword?.auth?.invalidCred)
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new CustomError(keyword?.auth?.isverify)
    }
    // Generete token
    const token = jwt.sign(
      { storeName: user.storeName, email: user.email },
      config.privetKey,
      { expiresIn: '1h' }
    );

    return successResponse(res, keyword?.auth?.login, 200, { token, user })
  } catch (error) {
    logger.error(`Error creating user: ${error.message}`);
    return errorResponse(res, error.message || keyword?.error, error.statusCode || 401)
  }
}

//Get User Profile
const getAllUser = async (req, res) => {
  try {
    const getuser = await userRepository.getUser();
    // res.status(200).json(getuser)
    return successResponse(res, keyword?.auth?.message, 200, getuser)
  } catch (error) {
    console.log(error)
    res.status(200).json({ error: "server Error" })
  }
}

// token jwt.verify
const getUserProfile = async (req, res) => {
  try {
    console.log("user");
    const profile = req.user;
    console.log("profile: ", profile);
    const userData = await userRepository.getProfile(profile);
    return successResponse(res, keyword?.auth?.message, 200, userData)
  } catch (error) {
    return errorResponse(res, error.message || keyword?.error, error.statusCode || 401)
  }
}
module.exports = { userCreate, loginUser, getAllUser, getUserProfile };