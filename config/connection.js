// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

if (process.env.JAWSDB_URL) {
  var sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
  var sequelize = new Sequelize("project_db", "root", "", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
}

// Exports the connection for other files to use
module.exports = sequelize;
