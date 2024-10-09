// controllers/orderController.js
const Order = require('../models/Order');
const generateOrderId = () => {
    return `ORD-${Date.now()}`; // Generate a unique order ID
};

const createOrder = async (req, res) => {
    const { user_id, order_items } = req.body;

    try {
        // Create the new order
        const newOrder = new Order({
            order_id: generateOrderId(),
            user_id: user_id, // Assuming you receive the user_id from the request body
            order_items: order_items // List of ticket IDs
        });

        // Save the order to the database
        await newOrder.save();

        // Return the created order
        res.status(201).json({ message: "Order created successfully", order: newOrder });
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ error: 'Server error', details: error.message });
    }
};

module.exports = {
    createOrder
};
