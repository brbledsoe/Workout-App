var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var workoutSchema = new Schema ({
  date: String,
  type: String,

  exercises: []
});

var WorkOut = mongoose.model('WorkOut', workoutSchema);

module.exports = WorkOut;
