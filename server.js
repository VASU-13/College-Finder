var express = require("express");                 // using express library
var morgan = require('morgan');
var mongoose = require('mongoose');

var bodyParser = require('body-parser');
var ejs = require('ejs');
var engine = require('ejs-mate');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('express-flash');
var secret = require('./config/secret');
var MongoStore = require('connect-mongo')(session);
var favicon = require('serve-favicon');

var passport = require('passport');

var User = require('./models/user');

var app = express(); // Express Object

mongoose.connect(secret.database,{useNewUrlParser:true },function(err) {
  if(err) {
    console.log(err);
  }
  else{
    console.log("Connected to the db");
  }
});


//Middleware
app.use(express.static(__dirname + '/public'));



app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: secret.secretKey,
  store: new MongoStore({ url: secret.database, autoReconnect: true})


}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req,res,next) {
  res.locals.user = req.user;
  next();
});


app.engine('ejs',engine);
app.set('view engine','ejs');



var mainRoutes = require('./routes/main');
var userRoutes = require('./routes/user');

app.use(mainRoutes);
app.use(userRoutes);



app.listen(secret.port, function (err) {
  if(err) throw err;                    // Call back if this shows error
  console.log("Server is running on port "+secret.port);
});
