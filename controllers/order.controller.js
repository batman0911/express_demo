'use strict'

var Order = require('../models/order');


exports.getListAll = function(req, res, next) {
    Order.getListAll(1, 1, function(error, results){
        // render
        if(error) {
            res.render('db_error', {message: "DB Error!"});
        }
        console.log(results);
        res.render('shop', {title: 'Shop Page', orders: results});
    });
}