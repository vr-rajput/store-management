const express = require('express');
const {getAllProducts} = require('../controller/product-controller')
const router =  express.Router();

// all routers 
router.get('/',getAllProducts)


module.exports = router;    