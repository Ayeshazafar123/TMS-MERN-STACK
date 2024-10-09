const mongoose = require('mongoose');
const Ticket = require('../models/Ticket'); // Import the Ticket model

// Define the Cart Schema
const cartSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        items: [
            {
                ticket: {
                    type: mongoose.Schema.Types.Mixed, // Or use a specific schema for ticket details if available
                    required: true,
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
    },
    { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create the Cart Model
const Cart = mongoose.model('Cart', cartSchema);

// Export the Cart Model
module.exports = Cart;
