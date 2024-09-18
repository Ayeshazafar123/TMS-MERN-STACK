const express = require('express');
const router = express.Router();
const { createAdminUser } = require('../controllers/adminController');

// Route for creating a new admin user
router.post('/admin', createAdminUser);

module.exports = router;
