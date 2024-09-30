

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
        picture: req.file ? req.file.path.replace(/\\/g, '/') : null // Ensure the path is URL-friendly
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
    const { category, sortBy, order = 'asc', page = 1, limit = 40 } = req.query;

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

// New route for fetching a single ticket by its ID
// @route   GET /tickets/:id
// @access  Public (or you can modify to require authentication)
router.get('/:id', async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    // If ticket not found, return 404
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    // Return the ticket details
    res.status(200).json(ticket);
  } catch (error) {
    // If there's an error (e.g., invalid ID format), return server error
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ error: 'Invalid ticket ID' });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

// New route for updating a ticket by its ID
// @route   PUT /tickets/:id
// @desc    Update details for a single ticket based on its ID
// @access  Public (or you can modify to require authentication)
router.put(
  '/:id',
  upload.single('picture'), // Optional: if you want to handle file uploads
  [
    // Validation checks
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
      // Extract the ticket ID from the URL parameters
      const ticketId = req.params.id;

      // Check if the ticket exists
      const ticket = await Ticket.findById(ticketId);
      if (!ticket) {
        return res.status(404).json({ error: 'Ticket not found' });
      }

      // Update ticket details
      ticket.category = req.body.category;
      ticket.name = req.body.name;
      ticket.start_date = req.body.start_date;
      ticket.expiry_date = req.body.expiry_date;
      ticket.price = req.body.price;

      // If a new picture is uploaded, update the picture path
      if (req.file) {
        ticket.picture = req.file.path.replace(/\\/g, '/');
      }

      // Save the updated ticket to the database
      const updatedTicket = await ticket.save();

      // Return a success response with the updated ticket's details
      res.status(200).json(updatedTicket);
    } catch (error) {
      // Handle any errors that occur during the process
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// New route for deleting a ticket by its ID
// @route   DELETE /tickets/:id
// @desc    Delete a single ticket based on its ID
// @access  Public (or you can modify to require authentication)
router.delete('/:id', async (req, res) => {
  try {
    const ticketId = req.params.id;

    // Check if the ticket exists
    const ticket = await Ticket.findById(ticketId);
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    // Delete the ticket from the database
    await Ticket.findByIdAndDelete(ticketId);

    // Return a success response
    res.status(204).json({ message: 'Ticket deleted successfully' });
  } catch (error) {
    // Handle any errors that occur during the process
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ error: 'Invalid ticket ID' });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
