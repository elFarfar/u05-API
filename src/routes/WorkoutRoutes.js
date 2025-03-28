const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');




// CRUD Routes
router.post("/api/v1/workouts", workoutController.createWorkout);
router.get("/api/v1/workouts", workoutController.getAllWorkouts);
router.get("/api/v1/workouts/:id", workoutController.getWorkoutById);
router.put("/api/v1/workouts/:id", workoutController.updateWorkoutById);
router.delete("/api/v1/workouts/:id", workoutController.deleteWorkoutById);

module.exports = router;
