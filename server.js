require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

//MIDDLEWERE
app.use(express.json());
app.use(cors());

// MongoDB-connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.log("❌ Error connecting to MongoDB:", err));

// Test-Route
app.get("/", (req, res) => {
  res.send("Welcome to the Workout API!");
});

//START SERVER
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
