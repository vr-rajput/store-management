const express = require('express');
const Router = express.Router();
const userCreate = require('../controllers/user-controller');
// const userControllers = require('../controllers/user-controller');

Router.route('/register').post(userCreate);

module.exports = Router;