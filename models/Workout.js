var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var workoutSchema = new Schema ({
  date: String,
  name: String,
  type: String, 
  total_reps: Number,
  total_weight: Number
});

var WorkOut = mongoose.model('WorkOut', workoutSchema);

module.exports = WorkOut;