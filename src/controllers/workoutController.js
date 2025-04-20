const Workout = require('../models/Workout');

// Create a new workout
exports.createWorkout = async (req, res) => {
  try {
    const workout = new Workout({
      ...req.body,
      userId: req.user, 
    });

    await workout.save();
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all workouts for logged-in user
exports.getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ userId: req.user });
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get one workout by ID 
exports.getWorkoutById = async (req, res) => {
  try {
    const workout = await Workout.findOne({ _id: req.params.id, userId: req.user });

    if (!workout) return res.status(404).json({ error: 'Workout not found' });
    res.json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update workout 
exports.updateWorkoutById = async (req, res) => {
  try {
    const workout = await Workout.findOneAndUpdate(
      { _id: req.params.id, userId: req.user },
      req.body,
      { new: true }
    );

    if (!workout) return res.status(404).json({ error: 'Workout not found' });
    res.json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE workout 
exports.deleteWorkoutById = async (req, res) => {
  try {
    const workout = await Workout.findOneAndDelete({
      _id: req.params.id,
      userId: req.user,
    });

    if (!workout) return res.status(404).json({ error: 'Workout not found' });
    res.json({ message: 'Workout deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
