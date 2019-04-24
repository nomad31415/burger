var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "para55shut",
    database: "burgers_db"
  });

connection.connect();
module.exports = connection;
