const jwt = require('jsonwebtoken');

// Function to generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    { username: user.username }, 
    process.env.ACCESS_TOKEN_SECRET, 
    { expiresIn: '24h' }
  );
};

module.exports = { generateToken };
