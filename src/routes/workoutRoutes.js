const express = require('express');
const router = express.Router();
const Workout = require('./src/models/Workout'); 


//CRUD_ROUTE
// Create a new workout (POST)
router.post('/', async (req, res) => {
  try {
    const newWorkout = new Workout(req.body); // Create a new workout with data from the request body
    const savedWorkout = await newWorkout.save(); // Save the workout in the database
    res.status(201).json(savedWorkout); // Send the saved workout as a response
  } catch (err) {
    res.status(400).json({ error: err.message }); // Return error if something goes wrong
  }
});

//  Get all workouts (GET)
router.get('/', async (req, res) => {
  try {
    const workouts = await Workout.find(); // Get all workouts from the database
    res.json(workouts); // Send the list of workouts as a response
  } catch (err) {
    res.status(500).json({ error: err.message }); // Return error if something goes wrong
  }
});

//  Get a single workout by ID (GET)
router.get('/:id', async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id); // Find workout by ID
    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' }); // Handle case if workout is not found
    }
    res.json(workout); // Send the found workout as a response
  } catch (err) {
    res.status(500).json({ error: err.message }); // Return error if something goes wrong
  }
});

//  Update a workout by ID (PUT)
router.put('/:id', async (req, res) => {
  try {
    const updatedWorkout = await Workout.findByIdAndUpdate(
      req.params.id, // Find workout by ID
      req.body, // Update workout with new data from the request body
      { new: true } // Return the updated workout
    );
    if (!updatedWorkout) {
      return res.status(404).json({ message: 'Workout not found' }); // Handle case if workout is not found
    }
    res.json(updatedWorkout); // Send the updated workout as a response
  } catch (err) {
    res.status(500).json({ error: err.message }); // Return error if something goes wrong
  }
});

//  Delete a workout by ID (DELETE)
router.delete('/:id', async (req, res) => {
  try {
    const deletedWorkout = await Workout.findByIdAndDelete(req.params.id); // Delete the workout by ID
    if (!deletedWorkout) {
      return res.status(404).json({ message: 'Workout not found' }); // Handle case if workout is not found
    }
    res.json({ message: 'Workout deleted successfully' }); // Confirm that workout was deleted
  } catch (err) {
    res.status(500).json({ error: err.message }); // Return error if something goes wrong
  }
});

module.exports = router; // Export the routes for use in the main server file
