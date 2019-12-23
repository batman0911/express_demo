'use strict';

const mysql = require('mysql');
// const config = require(__config_path + '/config');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mega1_api"
});

module.exports = db;