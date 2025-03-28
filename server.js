const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require('./src/routes/workoutRoutes');
require("dotenv").config(); // Load environment variables from .env file

const app = express();

app.use(express.json()); // Middleware to parse JSON requests
app.use("/api/v1", workoutRoutes); // Versioned routes

// Define the MongoDB URI from the .env file
const dbURI = process.env.MONGO_URI;

// Connect to MongoDB using the dbURI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
