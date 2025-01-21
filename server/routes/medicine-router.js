const express = require('express');
const medicineController = require('../controllers/medicine-controller');
const medicineRouter = express.Router();

// all routers
//create 
medicineRouter.route('/').post(medicineController.medicineCreate);
//get
medicineRouter.route('/').get(medicineController.getMedicine);

module.exports = medicineRouter;

