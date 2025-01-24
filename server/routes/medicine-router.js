const express = require('express');
const medicineController = require('../controllers/medicine-controller');
const medicineRouter = express.Router();


//create 
medicineRouter.route('/').post(medicineController.medicineCreate);
//get
medicineRouter.route('/').get(medicineController.getMedicine);
//getAllMedicinePaginated
medicineRouter.route('/all').get(medicineController.getAllMedicinePaginated);

module.exports = medicineRouter;

