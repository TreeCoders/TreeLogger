
// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("./../../config/connection.js");

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    userName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    userLocation: DataTypes.STRING,
  }, { timestamps: true});

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
