var express = require('express');
var router = express.Router();
// var db = require('../db');
var OrderController = require('../controllers/order.controller');

/* GET users listing. */
router.get('/list', OrderController.getListAll);

module.exports = router; 
