// // TMS-MERN-STACK/server/controllers/adminController.js

// const bcrypt = require('bcryptjs');
// const AdminUser = require('../models/AdminUser');

// // @desc    Create a new admin user
// // @access  Public (you can modify to require authentication)
// const createAdminUser = async (req, res) => {
//   try {
//     // Extract admin user details from the request body
//     const { username, password } = req.body;

//     // Perform necessary validation checks
//     if (!username || !password) {
//       return res.status(400).json({ error: 'Username and password are required' });
//     }

//     // Check if the user already exists
//     const existingUser = await AdminUser.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ error: 'Username already exists' });
//     }

//     // Hash the admin user's password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create a new admin user object with the hashed password
//     const newUser = new AdminUser({ username, password: hashedPassword });

//     // Save the new admin user to the database
//     await newUser.save();

//     // Return a success response with the created admin user's details
//     res.status(201).json({ message: 'Admin user created successfully', user: { id: newUser._id, username: newUser.username } });

//   } catch (error) {
//     // Handle any errors that occur during the process
//     console.error(error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// module.exports = {
//   createAdminUser
// };
