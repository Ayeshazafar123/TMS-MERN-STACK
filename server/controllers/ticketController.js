
const Ticket = require('../models/Ticket');
const TicketCategory = require('../models/TicketCategory');
const { validationResult } = require('express-validator');

// @desc    Create a new ticket
// @access  Public (can be modified to require authentication)
const createTicket = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { ticket_Id, category, name, start_date, expiry_date, price } = req.body;

    const categoryExists = await TicketCategory.findById(category);
    if (!categoryExists) {
      return res.status(404).json({ error: 'Category not found' });
    }

    const newTicket = new Ticket({
      ticket_Id,
      category,
      name,
      start_date,
      expiry_date,
      price,
      picture: req.file ? req.file.path.replace(/\\/g, '/') : null
    });

    await newTicket.save();
    res.status(201).json(newTicket);
  } catch (error) {
    console.error('Error creating ticket:', error);
    res.status(500).json({ error: 'Server error while creating ticket' });
  }
};

// @desc    View a list of tickets with optional filtering, sorting, and pagination
// @access  Public (you can modify this for authentication if needed)
const getTickets = async (req, res) => {
  try {
    const { category, sortBy = 'createdAt', order = 'asc', page = 1, limit = 10 } = req.query;
    const filter = category ? { category } : {};

    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const sortOrder = order === 'asc' ? 1 : -1;

    const tickets = await Ticket.find(filter)
      .sort({ [sortBy]: sortOrder })
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum);

    const totalTickets = await Ticket.countDocuments(filter);

    res.status(200).json({
      totalTickets,
      totalPages: Math.ceil(totalTickets / limitNum),
      currentPage: pageNum,
      tickets,
    });
  } catch (error) {
    console.error('Error retrieving tickets:', error);
    res.status(500).json({ error: 'Server error while retrieving tickets' });
  }
};

// @desc    Fetch and display details for a single ticket based on its ID
// @access  Public (you can modify this to require authentication)
const getTicketById = async (req, res) => {
  const { id } = req.params;

  try {
    const ticket = await Ticket.findById(id);
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }
    res.status(200).json(ticket);
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ error: 'Invalid ticket ID format' });
    }
    console.error('Error fetching ticket by ID:', error);
    res.status(500).json({ error: 'Server error while fetching ticket' });
  }
};

// @desc    Update a ticket by ID
// @access  Public (can be modified to require authentication)
const updateTicketById = async (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { ticket_Id, category, name, start_date, expiry_date, price } = req.body;

    const categoryExists = await TicketCategory.findById(category);
    if (!categoryExists) {
      return res.status(404).json({ error: 'Category not found' });
    }

    const updatedTicket = await Ticket.findByIdAndUpdate(
      id,
      {
        ticket_Id,
        category,
        name,
        start_date,
        expiry_date,
        price,
        picture: req.file ? req.file.path.replace(/\\/g, '/') : null
      },
      { new: true, runValidators: true }
    );

    if (!updatedTicket) {
      return res.status(404).json({ error: 'Ticket not found for update' });
    }

    res.status(200).json(updatedTicket);
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ error: 'Invalid ticket ID format' });
    }
    console.error('Error updating ticket:', error);
    res.status(500).json({ error: 'Server error while updating ticket' });
  }
};

// @desc    Delete a ticket by ID
// @access  Public (can be modified to require authentication)
const deleteTicketById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTicket = await Ticket.findByIdAndDelete(id);
    if (!deletedTicket) {
      return res.status(404).json({ error: 'Ticket not found for deletion' });
    }
    res.status(200).json({ message: 'Ticket deleted successfully' });
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ error: 'Invalid ticket ID format' });
    }
    console.error('Error deleting ticket:', error);
    res.status(500).json({ error: 'Server error while deleting ticket' });
  }
};

module.exports = {
  createTicket,
  getTickets,
  getTicketById,
  updateTicketById,
  deleteTicketById // Export the delete function
};









// const Ticket = require('../models/Ticket');
// const TicketCategory = require('../models/TicketCategory');
// const { validationResult } = require('express-validator');

// // @desc    Create a new ticket
// // @access  Public (can be modified to require authentication)
// const createTicket = async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   try {
//     const { ticket_Id, category, name, start_date, expiry_date, price } = req.body;

//     const categoryExists = await TicketCategory.findById(category);
//     if (!categoryExists) {
//       return res.status(404).json({ error: 'Category not found' });
//     }

//     const newTicket = new Ticket({
//       ticket_Id,
//       category,
//       name,
//       start_date,
//       expiry_date,
//       price,
//       picture: req.file ? req.file.path.replace(/\\/g, '/') : null,
//       userId:req.user
//     });

//     await newTicket.save();
//     res.status(201).json(newTicket);
//   } catch (error) {
//     console.error('Error creating ticket:', error);
//     res.status(500).json({ error: 'Server error while creating ticket' });
//   }
// };

// // @desc    View a list of tickets with optional filtering, sorting, and pagination
// // @access  Public (you can modify this for authentication if needed)
// const getTickets = async (req, res) => {
//   try {
//     const { category, sortBy = 'createdAt', order = 'asc', page = 1, limit = 10 } = req.query;
//     const filter = {userId:req.user};
//     // const filter = category ? { category } : {};
//     if(category){
//       filter.category=category;
//     }

//     const pageNum = parseInt(page);
//     const limitNum = parseInt(limit);
//     const sortOrder = order === 'asc' ? 1 : -1;

//     const tickets = await Ticket.find(filter)
//       .sort({ [sortBy]: sortOrder })
//       .skip((pageNum - 1) * limitNum)
//       .limit(limitNum);

//     const totalTickets = await Ticket.countDocuments(filter);

//     res.status(200).json({
//       totalTickets,
//       totalPages: Math.ceil(totalTickets / limitNum),
//       currentPage: pageNum,
//       tickets,
//     });
//   } catch (error) {
//     console.error('Error retrieving tickets:', error);
//     res.status(500).json({ error: 'Server error while retrieving tickets' });
//   }
// };

// // @desc    Fetch and display details for a single ticket based on its ID
// // @access  Public (you can modify this to require authentication)
// const getTicketById = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const ticket = await Ticket.findOne({_id:id, userId:req.user});
//     if (!ticket) {
//       return res.status(404).json({ error: 'Ticket not found' });
//     }
//     res.status(200).json(ticket);
//   } catch (error) {
//     if (error.kind === 'ObjectId') {
//       return res.status(400).json({ error: 'Invalid ticket ID format' });
//     }
//     console.error('Error fetching ticket by ID:', error);
//     res.status(500).json({ error: 'Server error while fetching ticket' });
//   }
// };

// // @desc    Update a ticket by ID
// // @access  Public (can be modified to require authentication)
// const updateTicketById = async (req, res) => {
//   const { id } = req.params;
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   try {
//     const { ticket_Id, category, name, start_date, expiry_date, price } = req.body;

//     const categoryExists = await TicketCategory.findById(category);
//     if (!categoryExists) {
//       return res.status(404).json({ error: 'Category not found' });
//     }

//     const updatedTicket = await Ticket.findByIdAndUpdate(
//       id,
//       {
//         ticket_Id,
//         category,
//         name,
//         start_date,
//         expiry_date,
//         price,
//         picture: req.file ? req.file.path.replace(/\\/g, '/') : null
//       },
//       { new: true, runValidators: true }
//     );

//     if (!updatedTicket) {
//       return res.status(404).json({ error: 'Ticket not found for update' });
//     }

//     res.status(200).json(updatedTicket);
//   } catch (error) {
//     if (error.kind === 'ObjectId') {
//       return res.status(400).json({ error: 'Invalid ticket ID format' });
//     }
//     console.error('Error updating ticket:', error);
//     res.status(500).json({ error: 'Server error while updating ticket' });
//   }
// };

// // @desc    Delete a ticket by ID
// // @access  Public (can be modified to require authentication)
// const deleteTicketById = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deletedTicket = await Ticket.findByIdAndDelete(id);
//     if (!deletedTicket) {
//       return res.status(404).json({ error: 'Ticket not found for deletion' });
//     }
//     res.status(200).json({ message: 'Ticket deleted successfully' });
//   } catch (error) {
//     if (error.kind === 'ObjectId') {
//       return res.status(400).json({ error: 'Invalid ticket ID format' });
//     }
//     console.error('Error deleting ticket:', error);
//     res.status(500).json({ error: 'Server error while deleting ticket' });
//   }
// };

// module.exports = {
//   createTicket,
//   getTickets,
//   getTicketById,
//   updateTicketById,
//   deleteTicketById // Export the delete function
// };
