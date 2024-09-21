// const express = require('express');
// const router = express.Router();
// const { createCategory, validateCategory } = require('../controllers/ticketCategoryController');
// const Category = require('../models/ticketCategoryModel'); // Import the Category model

// // @route   POST /ticket-categories/create
// // @desc    Create a new ticket category
// // @access  Public
// router.post('/ticket-categories/create', validateCategory, createCategory);

// // @route   GET /ticket-categories
// // @desc    Fetch all ticket categories
// // @access  Public (or modify to require authentication)
// router.get('/ticket-categories', async (req, res) => {
//   try {
//     // Fetch all categories from the database
//     const categories = await Category.find(); // Adjust if you have specific fields to select

//     // Return the categories in the response
//     res.status(200).json(categories);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const { createCategory, updateCategory, validateCategory } = require('../controllers/ticketCategoryController');
const { validateCategoryUpdate } = require('../middleware/ticketCategoryMiddleware'); // Import update validation middleware
const authMiddleware = require('../middleware/authMiddleware'); // Import authentication middleware
const Category = require('../models/ticketCategoryModel'); // Import the Category model

// @route   POST /ticket-categories/create
// @desc    Create a new ticket category
// @access  Public (or modify to require authentication)
router.post('/ticket-categories/create', validateCategory, createCategory);

// @route   PUT /ticket-categories/:id
// @desc    Update an existing ticket category
// @access  Private (Require authentication)
router.put('/ticket-categories/:id', authMiddleware, validateCategoryUpdate, updateCategory);

// @route   GET /ticket-categories/:id
// @desc    Fetch a ticket category by ID
// @access  Public (or modify to require authentication)
router.get('/ticket-categories/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.status(200).json(category);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   GET /ticket-categories
// @desc    Fetch all ticket categories
// @access  Public (or modify to require authentication)
router.get('/ticket-categories', async (req, res) => {
  try {
    const categories = await Category.find(); // Adjust if you have specific fields to select
    res.status(200).json(categories);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
