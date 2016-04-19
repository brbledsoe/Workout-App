var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/workouts');

var Workout = require('./models/Workout');

var app = express();


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', function(req, res){
  res.render('index');
});

app.listen(8000);