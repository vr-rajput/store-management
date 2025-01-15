const express = require('express');
const medicineController = require('../controller/medicine-controller')
const router =  express.Router();

// all routers 
router.get('/',  medicineController.getMedicine)
router.post('/', medicineController.medicineCreate)
router.put('/:id', medicineController.updateData)
router.delete('/:id', medicineController.deleteData)
 
module.exports = router;      