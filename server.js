require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const WorkoutRoutes = require("./src/routes/WorkoutRoutes");
const authRoutes = require('./src/routes/auth');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Root route - Render
app.get("/", (req, res) => {
  res.send("Welcome to the Workout API");
});

// Routes
app.use("/api/v1/workouts", WorkoutRoutes);
app.use('/api/auth', authRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
