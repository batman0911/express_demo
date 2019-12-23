'use strict'
var db = require('../db');

exports.getListAll = function(skip, limit, callback) {
    var sql = "SELECT * FROM orders";
    sql += " LIMIT " + skip + ',' + limit;

    db.query(sql, [], callback);
}