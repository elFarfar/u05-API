const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  workoutType: { type: String, required: true },
  duration: { type: String, required: true },
  focus: { type: String, required: true },
  goal: { type: String, required: true },
  date: { type: Date, default: Date.now } 
});

module.exports = mongoose.model('workout', workoutSchema);
