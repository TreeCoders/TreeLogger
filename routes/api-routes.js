
// ===============================================================================
// ROUTING
// ===============================================================================

const db = require("../models/api");
const Models = require("../models/api/");
const User = Models.user
const Post = Models.Post;


module.exports = function(app) {

  // Get all posts
  app.get("/api/posts", function(req, res) {
    Post.findAll({}).then(function(results) {
      res.json(results);
    });
  });



// **** Queries of Posts *****
// Homepage
  app.get("/", function(req, res) {
    db.Post.findAll({
      limit:10
    }).then(function(dbPost) {
      res.render("index", { post: dbPost });
    });
  });

  // treelog homepage
  app.get("/", function (req, res) {
    var obj = {};
    res.render("home", obj);
});
app.get("/about", function (req, res) {
    var obj = {};
    res.render("about", obj);
});
app.get("/donate", function (req, res) {
  var obj = {};
  res.render("donate", obj);
});

app.get("/home", function (req, res) {
    var obj = {};
    res.render("home", obj);
});
// treelog homepage
// ***** POST Requests for creating new post
app.post("/api/posts", (req, res) => {
  console.log(req.body);
  db.Post.create({
    // AUTHOR THIS IS FOR TESTING ONLY
    author: "Captain America",
    title: req.body.title,
    message: req.body.message,
    createdAt: new Date(),
    updatedAt: new Date()

    // category: req.body.category
  }).then( dbPost => {
    res.json(dbPost)
  });
});


//******************************************************************************************************** */
  //******************************************************************************************************** */

                      //Google OAuth  End

  //******************************************************************************************************** */
  //******************************************************************************************************** */


  // Get a specific book
  // app.get("/api/:book", function(req, res) {
  //   Book.findAll({
  //     where: {
  //       title: req.params.book
  //     }
  //   }).then(function(results) {
  //     res.json(results);
  //   });
  // });
  //
  // // Get all books of a specific genre
  // app.get("/api/genre/:genre", function(req, res) {
  //   Book.findAll({
  //     where: {
  //       genre: req.params.genre
  //     }
  //   }).then(function(results) {
  //     res.json(results);
  //   });
  // });
  //
  // // Get all books from a specific author
  // app.get("/api/author/:author", function(req, res) {
  //   Book.findAll({
  //     where: {
  //       author: req.params.author
  //     }
  //   }).then(function(results) {
  //     res.json(results);
  //   });
  // });
  //
  // // Get all "long" books (books 150 pages or more)
  // app.get("/api/books/long", function(req, res) {
  //   Book.findAll({
  //     where: {
  //       pages: {
  //         $gte: 150
  //       }
  //     },
  //     order: [["pages", "DESC"]]
  //   }).then(function(results) {
  //     res.json(results);
  //   });
  // });
  //
  // // Get all "short" books (books 150 pages or less)
  // app.get("/api/books/short", function(req, res) {
  //   Book.findAll({
  //     where: {
  //       pages: {
  //         $lte: 150
  //       }
  //     },
  //     order: [["pages", "ASC"]]
  //   }).then(function(results) {
  //     res.json(results);
  //   });
  // });
  //
  // // Add a book
  // app.post("/api/new", function(req, res) {
  //   console.log("Book Data:");
  //   console.log(req.body);
  //   Book.create({
  //     title: req.body.title,
  //     author: req.body.author,
  //     genre: req.body.genre,
  //     pages: req.body.pages
  //   });
  // });
  //
  // // Delete a book
  // app.post("/api/delete", function(req, res) {
  //   console.log("Book Data:");
  //   console.log(req.body);
  //   Book.destroy({
  //     where: {
  //       id: req.body.id
  //     }
  //   });
  // });
};
