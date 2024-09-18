const express = require('express');
const mongoose = require('mongoose');
const adminRoutes = require('./routes/admin');

const app = express();

// Middleware
app.use(express.json());  // To parse JSON bodies

// Routes
app.use('/admin', adminRoutes);  // Prefix route with '/admin'

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/TMS_DB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Start server
app.listen(5000, () => console.log('Server running on port 5000'));
