// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

let express = require("express");
let bodyParser = require("body-parser");


// Dependencies for GoogleOAuth
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

// Requiring our models for syncing
let db = require("./models/api/");


// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
let app = express();
var exphbs = require("express-handlebars");

// Sets an initial port. We"ll use this later in our listener
let PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// Static directory
app.use(express.static("public"));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/api-Routes")(app);
require("./routes/html-Routes")(app);
require('./config/passport')(passport);


//Gooogle OAuth initilazing
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: 'anystringoftext',
saveUninitialized: true,
resave: true}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require("./routes/SignIn-routes.js")(app, passport);
// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
console.log("yay connected to db")
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
