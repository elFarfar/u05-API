const express = require("express");
const router = express.Router();
const WorkoutController = require("../controllers/workoutController");

// CRUD Routes

// Create a new workout (POST)
router.post("/", WorkoutController.createWorkout);

// Get all workouts (GET)
router.get("/", WorkoutController.getAllWorkouts);

// Get a single workout by ID (GET)
router.get("/:id", WorkoutController.getWorkoutById);

// Update a workout by ID (PUT)
router.put("/:id", WorkoutController.updateWorkoutById);

// Delete a workout by ID (DELETE)
router.delete("/:id", WorkoutController.deleteWorkoutById);

module.exports = router; // Export the routes
