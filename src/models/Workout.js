const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  workoutType: { type: String, required: true },
  duration: { type: Number, required: true },
  focus: { type: String, required: true },
  goal: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Workout", workoutSchema);
