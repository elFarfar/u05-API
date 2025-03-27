const express = require("express");
const app = express();
const mongoose = require("mongoose");
const workoutRoutes = require("./src/routes/WorkoutRoutes");

app.use(express.json()); // Middleware to parse JSON requests
app.use("/api/v1", workoutRoutes); // Versioned routes

// Connect to MongoDB
mongoose.connect('your_mongodb_connection_string', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error: ", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
