var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {useNewUrlParser: true,
    useUnifiedTopology: true
  });
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var phoneRouter = require('./routes/phone');
var boardRouter = require('./routes/board');
var ChooseRouter = require('./routes/Choose');
var phone= require("./models/phone");2
var resourceRouter = require('./routes/resource');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/phone', phoneRouter);
app.use('/board', boardRouter);
app.use('/Choose', ChooseRouter);
app.use('/resource',resourceRouter);

async function recreateDB(){
  // Delete everything
  await phone.deleteMany();
  let instance1 = new phone({Phone_Name:"oneplus",Phone_price:200000,Phone_Storage:256});
  let instance2 = new phone({Phone_Name:"IPhone7",Phone_price:400000,Phone_Storage:512});
  let instance3 = new phone({Phone_Name:"Samsung",Phone_price:1000000,Phone_Storage:1024});
  instance1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)
  });
  instance2.save().then(doc=>{
  console.log("second object saved")}
  ).catch(err=>{
  console.error(err)
  });
  instance3.save().then(doc=>{
  console.log("third object saved")}
  ).catch(err=>{
  console.error(err)
  });
  }
  let reseed = true;
  if (reseed) {recreateDB();
    
  }
  

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
