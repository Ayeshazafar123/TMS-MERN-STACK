require('dotenv').config();  // Load environment variables from .env

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // For handling Cross-Origin Resource Sharing
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/authRoutes');  // Import auth routes

const app = express();

// Middleware
app.use(express.json());  // To parse JSON bodies
app.use(cors());  // Enable CORS for all routes

// Routes
app.use('/admin', adminRoutes);  // Admin routes
app.use('/auth', authRoutes);    // Auth routes (register, login)

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI;  // MongoDB URI from .env file
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })  // Connect to MongoDB
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 5000;  // Use port from .env or default to 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
