const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  category_Id: {
    type: String,
    required: true,
    unique: true,
  },
  category_Name: {
    type: String,
    required: true,
  },
  category_Description: {
    type: String,
    required: true,
    minlength: 10,
  },
  isActive: {
    type: Boolean,
    default: true, // Optional: Set a default value
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const TicketCategory = mongoose.model('TicketCategory', categorySchema);

module.exports = TicketCategory;