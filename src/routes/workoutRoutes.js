const express = require('express');
const router = express.Router();
const Workout = require('/models/Workout');

//  Create a Workout (POST)
router.post('/', async (req, res) => {
  try {
    const newWorkout = new Workout(req.body);
    const savedWorkout = await newWorkout.save();
    res.status(201).json(savedWorkout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//  Get All Workouts (GET)
router.get('/', async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a Single Workout by ID (GET)
router.get('/:id', async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) return res.status(404).json({ message: 'Workout not found' });
    res.json(workout);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT- Update
router.put('/:id', async (req, res) => {
  try {
    const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedWorkout);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Workout.findByIdAndDelete(req.params.id);
    res.json({ message: 'Workout deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
