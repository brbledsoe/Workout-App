var mongoose = require('mongoose');

var exerciseModel = new mongoose.Schema({
   name: String,
   total_reps: Number,
   total_weight: Number
});

var Exercise = mongoose.model('Exercise', exerciseModel);

module.exports = Exercise;
