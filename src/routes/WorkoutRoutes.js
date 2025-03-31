const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');




// CRUD Routes
router.post("/", workoutController.createWorkout);
router.get("/", workoutController.getAllWorkouts);
router.get("/:id", workoutController.getWorkoutById);
router.put("/:id", workoutController.updateWorkoutById);
router.delete("/:id", workoutController.deleteWorkoutById);

module.exports = router;
