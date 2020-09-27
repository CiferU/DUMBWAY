//General imports and server
const express = require('express');
const path = require('path');
const morgan = require('morgan');
//const ejs = require('ejs');
const mongoose = require("mongoose");
const market = require("./models/market");
const app = express();

//Mongoose connection
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/dumbway-db')
  .then(db => console.log("DB is connected"))
  .catch(err => console.error(error));

//imports
const RI = require('./routes/index');

app.set('port', process.env.PORT || 3000);

//EJS
app.set('views', path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

//middleware
app.use(morgan('dev'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use('/', RI);

//start server
app.listen(app.get('port'), ()=>{
    console.log('server runs on ', app.get('port'))
});
/*
require('dotenv').config();

const app = require('./server');
require('./database');

// Server is listening
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
  //console.log('Environment:', process.env.NODE_ENV);
});*/