const express = require('express');
const { registerAdminUser, loginAdminUser } = require('../controllers/authController');

const router = express.Router();

// Public route for user registration
router.post('/register', registerAdminUser);

// Public route for user login
router.post('/login', loginAdminUser);

module.exports = router;
