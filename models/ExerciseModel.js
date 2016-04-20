var mongoose = require('mongoose');

var exerciseSchema = new mongoose.Schema({
   name: String,
   total_reps: Number,
   total_weight: Number
});

var Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
