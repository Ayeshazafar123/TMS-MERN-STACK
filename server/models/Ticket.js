// // const mongoose = require('mongoose');

// // // Define the schema for tickets
// // const ticketSchema = new mongoose.Schema({
// //   // Field for ticket ID
// //   ticket_Id: {
// //     type: String,
// //     required: true,
// //     unique: true
// //   },
// //   // Field for category (referencing the TicketCategory collection)
// //   category: {
// //     type: mongoose.Schema.Types.ObjectId,
// //     ref: 'TicketCategory',
// //     required: true
// //   },
// //   // Field for name
// //   name: {
// //     type: String,
// //     required: true
// //   },
// //   // Field for start date
// //   start_date: {
// //     type: Date,
// //     required: true
// //   },
// //   // Field for expiry date
// //   expiry_date: {
// //     type: Date,
// //     required: true
// //   },
// //   // Field for price
// //   price: {
// //     type: Number,
// //     required: true
// //   },
// //   // Field for picture
// //   picture: {
// //     type: String,
// //     required: false
// //   }
// // });

// // // Create and export the model
// // const Ticket = mongoose.model('Ticket', ticketSchema);
// // module.exports = Ticket;









// const mongoose = require('mongoose');

// // Define the schema for tickets
// const ticketSchema = new mongoose.Schema({
//   // Field for ticket ID
//   ticket_Id: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   // Field for category (referencing the TicketCategory collection)
//   category: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'TicketCategory',
//     required: true
//   },
//   // Field for name
//   name: {
//     type: String,
//     required: true
//   },
//   // Field for start date
//   start_date: {
//     type: Date,
//     required: true
//   },
//   // Field for expiry date
//   expiry_date: {
//     type: Date,
//     required: true
//   },
//   // Field for price
//   price: {
//     type: Number,
//     required: true
//   },
//   // Field for picture
//   picture: {
//     type: String,
//     required: false
//   },
//   // for user only

//   userId:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'user',
//     required:true
//   }
// });

// // Create and export the model
// const Ticket = mongoose.model('Ticket', ticketSchema);
// module.exports = Ticket;


const mongoose = require('mongoose');

// Define the schema for tickets
const ticketSchema = new mongoose.Schema({
  // Field for ticket ID
  ticket_Id: {
    type: String,
    required: true,
    unique: true
  },
  // Field for category (referencing the TicketCategory collection)
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TicketCategory',
    required: true
  },
  // Field for name
  name: {
    type: String,
    required: true
  },
  // Field for start date
  start_date: {
    type: Date,
    required: true
  },
  // Field for expiry date
  expiry_date: {
    type: Date,
    required: true
  },
  // Field for price
  price: {
    type: Number,
    required: true
  },
  // Field for picture
  picture: {
    type: String,
    required: false
  }
});

// Create and export the model
const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;