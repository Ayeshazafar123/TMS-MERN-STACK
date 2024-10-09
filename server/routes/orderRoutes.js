// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const { createOrder } = require('../controllers/orderController');
const userMiddleware = require('../middleware/userMiddleware');

// Create an order
router.post('/', userMiddleware, createOrder); // Ensure user is authenticated

module.exports = router;