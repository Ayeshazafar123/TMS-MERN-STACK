const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
const { createAdminUser } = require('../controllers/adminController');

// Route for creating a new admin user
router.post('/admin', authenticateToken, createAdminUser);

module.exports = router;
