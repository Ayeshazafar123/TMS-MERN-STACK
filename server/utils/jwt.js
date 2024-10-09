// const jwt = require('jsonwebtoken');

// // Function to generate JWT token
// const generateToken = (user) => {
//   return jwt.sign(
//     { username: user.username }, 
//     process.env.ACCESS_TOKEN_SECRET, 
//     { expiresIn: '24h' }
//   );
// };

// module.exports = { generateToken };




const jwt = require('jsonwebtoken');

// Function to generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, username: user.username }, // Include user ID in the payload
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '24h' }
  );
};

module.exports = { generateToken };
