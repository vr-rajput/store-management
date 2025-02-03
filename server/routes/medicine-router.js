const express = require('express');
const medicineRouter = express.Router();
const medicineController = require('../controllers/medicine-controller');


//create 
medicineRouter.route('/').post(medicineController.medicineCreate);
//get
medicineRouter.route('/serching').get(medicineController.getMedicine);
//getAllMedicinePaginated
medicineRouter.route('/').get(medicineController.getAllMedicinePaginated);

module.exports = medicineRouter;

