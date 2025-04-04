const Workout = require('../models/Workout');

// Create a new workout
exports.createWorkout = async (req, res) => {
    try {
        const workout = new Workout(req.body);
        await workout.save();
        res.status(201).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all Workouts
exports.getAllWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get one workout by ID
exports.getWorkoutById = async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id);
        if (!workout) return res.status(404).json({ error: 'Workout not found' });
        res.json(workout);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update  workout
exports.updateWorkoutById = async (req, res) => {
    try {
        const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!workout) return res.status(404).json({ error: 'Workout not found' });
        res.json(workout);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE workout
exports.deleteWorkoutById = async (req, res) => {
    try {
        const workout = await Workout.findByIdAndDelete(req.params.id);
        if (!workout) return res.status(404).json({ error: 'Workout not found' });
        res.json({ message: 'Workout deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
