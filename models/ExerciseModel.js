var mongoose = require('mongoose');

var exerciseSchema = new mongoose.Schema({
   name: String,
   sets: []
});

var Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
