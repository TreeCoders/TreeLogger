
// ===============================================================================
// ROUTING
// ===============================================================================

const db = require("../models/api");
const Models = require("../models/api/");
const User = Models.user
const Post = Models.Post;

var googleUser = require("../models/googleUser");
var passport = require('../config/passport')


module.exports = function (app) {

  // Get all posts
  app.get("/api/posts", function (req, res) {
    Post.findAll({}).then(function (results) {
      res.json(results);
    });
  });


    // app.delete('/posts/:id', (req, res) => {
    //  const idr = req.params.id
    //   db.Post.destroy({
    //     where: { id: idr }
    //   })
    //     .then(deletedOwner => {
    //       res.json(deletedOwner);
    //     });
    // });



  app.get("/community", function (req, res) {

    db.Post.findAll({
      limit: 10
    }).then(function (dbPost) {
      res.render("community", { post: dbPost });
    });



  });

  // treelog homepage
  app.get("/", function (req, res) {
    var obj = {};
    res.render("index", obj);
  });


  app.get("/about", function (req, res) {
    var obj = {};
    res.render("about", obj);
  });


  app.get("/community", function (req, res) {
    var obj = {};
    res.render("community", obj);
  });


  app.get("/donate", function (req, res) {
    var obj = {};
    res.render("donate", obj);
  });

  app.get("/thankyou", function (req, res) {
    var obj = {};
    res.render("thankyou", obj);
  });

  app.get("/home", function (req, res) {
    var obj = {};
    res.render("home", obj);
  });


  app.get("/map", function (req, res) {
    var obj = {};
    res.render("map", obj);
  });




  // treelog homepage
  // ***** POST Requests for creating new post
  app.post("/api/posts", (req, res) => {
    console.log(req.body);
    db.Post.create({
      // AUTHOR THIS IS FOR TESTING ONLY
      author: req.body.author,
      title: req.body.title,
      message: req.body.message,
      createdAt: new Date(),
      updatedAt: new Date()

      // category: req.body.category
    }).then(dbPost => {
      res.json(dbPost)
    });
  });




};
