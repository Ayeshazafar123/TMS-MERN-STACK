const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AdminUser = require('../models/AdminUser');
require('dotenv').config();  // Ensure environment variables are loaded

// @desc    Authenticate admin user and issue JWT token
// @access  Public
const loginAdminUser = async (req, res) => {
  try {
    // Extract username and password from the request body
    const { username, password } = req.body;

    // Perform necessary validation checks
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    // Find the admin user by username in the database
    const user = await AdminUser.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate a JWT token
    const accessToken = jwt.sign(
      { id: user._id, username: user.username },
      process.env.ACCESS_TOKEN_SECRET,  // Secret key for signing tokens
      { expiresIn: '1h' }  // Token expiry time
    );

    // Return a success response with the token
    res.status(200).json({ accessToken });

  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  loginAdminUser
};
