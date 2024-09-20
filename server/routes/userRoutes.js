const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();

// @route   POST /user/register
// @desc    Register a new user
// @access  Public
router.post('/register', registerUser);

// @route   POST /user/login
// @desc    Login user and get token
// @access  Public
router.post('/login', loginUser);

module.exports = router;
