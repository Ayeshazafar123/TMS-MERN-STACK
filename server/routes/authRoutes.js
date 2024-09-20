const express = require('express');
const { registerAdminUser, loginAdminUser } = require('../controllers/authController');

const router = express.Router();

// Route for user registration
router.post('/register', registerAdminUser);

// Route for user login
router.post('/login', loginAdminUser);

module.exports = router;
