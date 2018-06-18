
// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("./../../config/connection.js");

module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
    },

    likes: {
      type: DataTypes.INTEGER,
    },

    rating: {
      type: DataTypes.FLOAT
    },
    postLocation: {
      type: DataTypes.STRING
    }
  }, {timestamps: true
});

  Post.associate = function(models) {
    // associations can be defined here
  };

  return Post;
};
