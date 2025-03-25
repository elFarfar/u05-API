require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// MongoDB-connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('💾 MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Test-Route
app.get('/', (req, res) => {
  res.send('Welcome to the Workout API!');
});

//START SERVER
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
