const express = require('express');
const medicineRouter = express.Router();
const medicineController = require('../controllers/medicine-controller');


//create 
medicineRouter.route('/').post(medicineController.medicineCreate);
//get
medicineRouter.route('/').get(medicineController.getMedicine);
//getAllMedicinePaginated
medicineRouter.route('/serching').get(medicineController.getAllMedicinePaginated);

module.exports = medicineRouter;

