// const Ticket = require('../models/Ticket');
// const TicketCategory = require('../models/TicketCategory');
// const { validationResult } = require('express-validator');

// // @desc    Create a new ticket
// // @access  Public (can be modified to require authentication)
// const createTicket = async (req, res) => {
//   // Validate request data
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   try {
//     // Extract ticket details from the request body
//     const { ticket_Id, category, name, start_date, expiry_date, price } = req.body;

//     // Validate the category exists
//     const categoryExists = await TicketCategory.findById(category);
//     if (!categoryExists) {
//       return res.status(404).json({ error: 'Category not found' });
//     }

//     // Create a new ticket object
//     const newTicket = new Ticket({
//       ticket_Id,
//       category,
//       name,
//       start_date,
//       expiry_date,
//       price,
//       picture: req.file ? req.file.path : null // Store the image path if uploaded
//     });

//     // Save the new ticket to the database
//     await newTicket.save();

//     // Return a success response with the created ticket's details
//     res.status(201).json(newTicket);
//   } catch (error) {
//     // Handle any errors that occur during the process
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// module.exports = {
//   createTicket
// };


const Ticket = require('../models/Ticket');
const TicketCategory = require('../models/TicketCategory');
const { validationResult } = require('express-validator');

// @desc    Create a new ticket
// @access  Public (can be modified to require authentication)
const createTicket = async (req, res) => {
  // Validate request data
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
      picture: req.file ? req.file.path : null // Store the image path if uploaded
    });

    // Save the new ticket to the database
    await newTicket.save();

    // Return a success response with the created ticket's details
    res.status(201).json(newTicket);
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    View a list of tickets with optional filtering, sorting, and pagination
// @access  Public (you can modify this for authentication if needed)
const getTickets = async (req, res) => {
  try {
    // Destructure query parameters for filtering, sorting, and pagination
    const { category, sortBy = 'createdAt', order = 'asc', page = 1, limit = 10 } = req.query;

    // Build the filter object based on query parameters
    const filter = {};
    if (category) {
      filter.category = category; // Filter by category if provided
    }

    // Convert pagination and sorting values to appropriate types
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const sortOrder = order === 'asc' ? 1 : -1;

    // Fetch the list of tickets from the database with filtering, sorting, and pagination
    const tickets = await Ticket.find(filter)
      .sort({ [sortBy]: sortOrder }) // Sort tickets by sortBy field and order
      .skip((pageNum - 1) * limitNum) // Skip records for pagination
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
};

module.exports = {
  createTicket,
  getTickets
};
