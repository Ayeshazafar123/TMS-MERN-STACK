// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// // Define the Order schema
// const OrderSchema = new Schema({
//   // Unique identifier for the order
//   order_id: {
//     type: String,
//     unique: true,
//     required: true, // This field is required
//   },
//   // Reference to the User model
//   user_id: {
//     type: Schema.Types.ObjectId,
//     ref: 'User',
//     required: true, // This field is required
//   },
//   // Array of references to the Ticket model
//   order_items: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Ticket',
//       required: true, // This field is required
//     },
//   ],
//   // Timestamp of when the order was placed
//   purchase_timestamp: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // Pre-save hook to generate a unique order_id
// OrderSchema.pre('save', function (next) {
//   this.order_id = `ORDER-${Date.now()}-${Math.floor(Math.random() * 10000)}`; // Generate a unique order ID
//   next();
// });

// // Create the Order model
// const Order = mongoose.model('Order', OrderSchema);

// module.exports = Order;

















const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Order schema
const OrderSchema = new Schema({
  // Unique identifier for the order
  order_id: {
    type: String,
    unique: true,
    required: true, // This field is required
  },
  // Reference to the User model
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true, // This field is required
  },
  // Array of objects containing references to the Ticket model and quantity
  order_items: [
    {
      ticketId: {
        type: Schema.Types.ObjectId,
        ref: 'Ticket',
        required: true, // This field is required
      },
      quantity: {
        type: Number,
        required: true, // This field is required
      },
    },
  ],
  // Timestamp of when the order was placed
  purchase_timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Pre-save hook to generate a unique order_id
OrderSchema.pre('save', function (next) {
  this.order_id = `ORDER-${Date.now()}-${Math.floor(Math.random() * 10000)}`; // Generate a unique order ID
  next();
});

// Create the Order model
const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
