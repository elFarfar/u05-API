const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');
const auth = require('../middleware/auth');

// Protect all routes
router.post("/", auth, workoutController.createWorkout);
router.get("/", auth, workoutController.getAllWorkouts);
router.get("/:id", auth, workoutController.getWorkoutById);
router.put("/:id", auth, workoutController.updateWorkoutById);
router.delete("/:id", auth, workoutController.deleteWorkoutById);

module.exports = router;
