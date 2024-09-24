// const express = require('express');
// const { check, validationResult } = require('express-validator');
// const multer = require('multer');
// const router = express.Router();
// const Ticket = require('../models/Ticket');
// const TicketCategory = require('../models/ticketCategoryModel'); // Correct import

// // Configure multer for file uploads (e.g., ticket pictures)
// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, 'uploads/'); // Specify the directory to save the images
//   },
//   filename: function(req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname); // Create a unique filename
//   }
// });
// const upload = multer({ storage: storage });

// // @route   POST /tickets
// // @desc    Create a new ticket
// // @access  Public (can be modified to require authentication)
// router.post('/', 
//   upload.single('picture'), // Middleware to handle single image upload
//   [
//     // Validation checks
//     check('ticket_Id', 'Ticket ID is required').not().isEmpty(),
//     check('category', 'Category is required').not().isEmpty(),
//     check('name', 'Name is required').not().isEmpty(),
//     check('start_date', 'Start date is required').isDate(),
//     check('expiry_date', 'Expiry date is required').isDate(),
//     check('price', 'Price must be a number').isNumeric()
//   ],
//   async (req, res) => {
//     // Check for validation errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//       // Extract ticket details from the request body
//       const { ticket_Id, category, name, start_date, expiry_date, price } = req.body;

//       // Validate the category exists
//       const categoryExists = await TicketCategory.findById(category);
//       if (!categoryExists) {
//         return res.status(404).json({ error: 'Category not found' });
//       }

//       // Create a new ticket object
//       const newTicket = new Ticket({
//         ticket_Id,
//         category,
//         name,
//         start_date,
//         expiry_date,
//         price,
//         picture: req.file ? req.file.path : null // Store the image path if uploaded
//       });

//       // Save the new ticket to the database
//       const ticket = await newTicket.save();

//       // Return a success response with the created ticket's details
//       res.status(201).json(ticket);
//     } catch (error) {
//       // Handle any errors that occur during the process
//       res.status(500).json({ error: 'Server error' });
//     }
//   }
// );

// module.exports = router;


const express = require('express');
const { check, validationResult } = require('express-validator');
const multer = require('multer');
const router = express.Router();
const Ticket = require('../models/Ticket');
const TicketCategory = require('../models/ticketCategoryModel'); // Correct import

// Configure multer for file uploads (e.g., ticket pictures)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory to save the images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Create a unique filename
  }
});
const upload = multer({ storage: storage });

// @route   POST /tickets
// @desc    Create a new ticket
// @access  Public
router.post(
  '/',
  upload.single('picture'), // Middleware to handle single image upload
  [
    // Validation checks
    check('ticket_Id', 'Ticket ID is required').not().isEmpty(),
    check('category', 'Category is required').not().isEmpty(),
    check('name', 'Name is required').not().isEmpty(),
    check('start_date', 'Start date is required').isDate(),
    check('expiry_date', 'Expiry date is required').isDate(),
    check('price', 'Price must be a number').isNumeric()
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Extract ticket details from the request body
      const { ticket_Id, category, name, start_date, expiry_date, price } = req.body;

      // Validate the category exists
      const categoryExists = await TicketCategory.findById(category);
      if (!categoryExists) {
        return res.status(404).json({ error: 'Category not found' });
      }

      // Create a new ticket object
      const newTicket = new Ticket({
        ticket_Id,
        category,
        name,
        start_date,
        expiry_date,
        price,
        // Store the image path as a complete URL
        // Change this line in your ticket creation logic
picture: req.file ? req.file.path.replace(/\\/g, '/') : null
// Ensure the path is URL-friendly
      });

      // Save the new ticket to the database
      const ticket = await newTicket.save();

      // Return a success response with the created ticket's details
      res.status(201).json(ticket);
    } catch (error) {
      // Handle any errors that occur during the process
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// @route   GET /tickets
// @desc    Fetch and display a list of available tickets with filtering, sorting, and pagination
// @access  Public
router.get('/', async (req, res) => {
  try {
    // Destructure query parameters for filtering, sorting, and pagination
    const { category, sortBy, order = 'asc', page = 1, limit = 10 } = req.query;

    // Build the filter object based on query parameters
    const filter = {};
    if (category) {
      filter.category = category; // Filter by category if provided
    }

    // Convert pagination values to numbers
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);

    // Fetch the list of tickets from the database with filtering, sorting, and pagination
    const tickets = await Ticket.find(filter)
      .sort(sortBy ? { [sortBy]: order === 'asc' ? 1 : -1 } : {}) // Sort tickets if sortBy parameter is provided
      .skip((pageNum - 1) * limitNum) // Skip tickets for pagination
      .limit(limitNum); // Limit the number of tickets returned

    // Get the total count of tickets for pagination metadata
    const totalTickets = await Ticket.countDocuments(filter);

    // Return the list of tickets along with pagination metadata in the response
    res.status(200).json({
      totalTickets,
      totalPages: Math.ceil(totalTickets / limitNum),
      currentPage: pageNum,
      tickets,
    });
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
