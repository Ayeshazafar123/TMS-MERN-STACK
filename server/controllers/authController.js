const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AdminUser = require('../models/AdminUser');
const { generateToken } = require('../utils/jwt'); // Assuming you have a utility for generating tokens

// Register new admin user
// Register new admin user
const registerAdminUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Please provide both username and password' });
    }

    const existingUser = await AdminUser.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new AdminUser({ username, password });
    await newUser.save();

    // Generate a JWT token for the newly created user
    const token = generateToken(newUser._id);

    res.status(201).json({
      message: 'User registered successfully',
      token, // Include the token in the response
      user: { username: newUser.username },
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


// Login admin user
const loginAdminUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Please provide both username and password' });
    }

    const user = await AdminUser.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id);
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        username: user.username,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  registerAdminUser,
  loginAdminUser,
};
