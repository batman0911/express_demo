'use strict'

// var express = require('express');
// var router = express.Router();
// 

module.exports = function(app) {
    app.use('/', require('./index'));
    app.use('/users', require('./users'));
    app.use('/shop', require('./shop'));

};
