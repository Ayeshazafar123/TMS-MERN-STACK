

// // // const Ticket = require('../models/Ticket');

// // // // Controller to add a ticket to the user's cart
// // // const addToCart = async (req, res) => {
// // //     try {
// // //         const { ticketId } = req.body;

// // //         // Logging ticketId for debugging
// // //         console.log("Received ticketId:", ticketId);

// // //         if (!ticketId) {
// // //             return res.status(400).json({ message: "Ticket ID is required" });
// // //         }

// // //         const ticket = await Ticket.findById(ticketId);
// // //         console.log("Fetched ticket:", ticket); // Log ticket information

// // //         if (!ticket) {
// // //             return res.status(404).json({ message: "Ticket not found" });
// // //         }

// // //         // Session cart management
// // //         if (!req.session.cart) {
// // //             req.session.cart = [];
// // //         }

// // //         const existingTicketIndex = req.session.cart.findIndex(item => item.ticketId === ticketId);
// // //         if (existingTicketIndex !== -1) {
// // //             return res.status(400).json({ message: "Ticket is already in cart" });
// // //         }

// // //         req.session.cart.push({ ticketId, quantity: 1 });
// // //         res.status(200).json({ message: "Ticket added to cart successfully", cart: req.session.cart });
// // //     } catch (error) {
// // //         console.error("Error adding ticket to cart:", error);
// // //         res.status(500).json({ error: 'Server error', details: error.message });
// // //     }
// // // };

// // // const getCartContents = (req, res) => {
// // //     try {
// // //         // Validate the user session
// // //         if (!req.session || !req.session.cart) {
// // //             // Return an empty cart if the session is invalid or cart does not exist
// // //             return res.status(200).json({ cart: [], message: 'Cart is empty' });
// // //         }

// // //         // Retrieve the cart from the user's session
// // //         const cartItems = req.session.cart;

// // //         // Format the cart data for the frontend
// // //         const formattedCart = cartItems.map(item => ({
// // //             ticketId: item.ticketId,
// // //             quantity: item.quantity
// // //         }));

// // //         // Return the cart contents in the response
// // //         res.status(200).json({ cart: formattedCart, message: 'Cart retrieved successfully' });
// // //     } catch (error) {
// // //         console.error("Error fetching cart contents:", error);
// // //         // Handle any errors that occur during the process
// // //         res.status(500).json({ error: 'Server error', details: error.message });
// // //     }
// // // };


// // // module.exports = {
// // //     addToCart,
// // //     getCartContents,
// // // };





















// // const Ticket = require('../models/Ticket');
// // const Order = require('../models/Order');
// // const User = require('../models/User')
// // const { v4: uuidv4 } = require('uuid'); 

// // // Controller to add a ticket to the user's cart
// // const addToCart = async (req, res) => {
// //     try {
// //         const { ticketId } = req.body;

// //         // Log the received ticket ID for debugging
// //         console.log("Received ticketId:", ticketId);

// //         if (!ticketId) {
// //             return res.status(400).json({ message: "Ticket ID is required" });
// //         }

// //         // Fetch the ticket from the database
// //         const ticket = await Ticket.findById(ticketId);
// //         console.log("Fetched ticket:", ticket); // Log ticket information

// //         if (!ticket) {
// //             return res.status(404).json({ message: "Ticket not found" });
// //         }

// //         // Initialize the session cart if it doesn't exist
// //         if (!req.session.cart) {
// //             req.session.cart = [];
// //         }

// //         // Check if the ticket is already in the cart
// //         const existingTicketIndex = req.session.cart.findIndex(item => item.ticketId.toString() === ticketId);
// //         if (existingTicketIndex !== -1) {
// //             // Increment quantity if the ticket is already in the cart
// //             req.session.cart[existingTicketIndex].quantity += 1;
// //             return res.status(200).json({ message: "Ticket quantity updated in cart", cart: req.session.cart });
// //         }

// //         // Add the ticket to the cart
// //         req.session.cart.push({ ticketId, quantity: 1 });
// //         res.status(200).json({ message: "Ticket added to cart successfully", cart: req.session.cart });
// //     } catch (error) {
// //         console.error("Error adding ticket to cart:", error);
// //         res.status(500).json({ error: 'Server error', details: error.message });
// //     }
// // };



// // // Controller to remove a ticket from the user's cart
// // const removeFromCart = (req, res) => {
// //     try {
// //         // Extract ticket ID from the request parameters
// //         const { id } = req.params;

// //         // Validate the user session
// //         if (!req.session.cart) {
// //             return res.status(400).json({ message: 'Cart is empty or not initialized.' });
// //         }

// //         // Find the index of the ticket in the cart
// //         const ticketIndex = req.session.cart.findIndex(item => item.ticketId === id);

// //         // Check if the ticket exists in the cart
// //         if (ticketIndex === -1) {
// //             return res.status(404).json({ message: 'Ticket not found in cart.' });
// //         }

// //         // Remove the ticket from the cart in the session
// //         req.session.cart.splice(ticketIndex, 1);

// //         // Return success response with updated cart details
// //         return res.status(200).json({ message: 'Ticket removed from cart successfully.', cart: req.session.cart });
// //     } catch (error) {
// //         // Handle any errors that occur during the process
// //         console.error("Error removing ticket from cart:", error);
// //         res.status(500).json({ error: 'Server error', details: error.message });
// //     }
// // };

// // // const getCartContents = (req, res) => {
// // //     try {
// // //         // Validate the user session
// // //         if (!req.session || !req.session.cart) {
// // //             // Return an empty cart if the session is invalid or cart does not exist
// // //             return res.status(200).json({ cart: [], message: 'Cart is empty' });
// // //         }

// // //         // Retrieve the cart from the user's session
// // //         const cartItems = req.session.cart;

// // //         // Format the cart data for the frontend
// // //         const formattedCart = cartItems.map(item => ({
// // //             ticketId: item.ticketId,
// // //             quantity: item.quantity
// // //         }));

// // //         // Return the cart contents in the response
// // //         res.status(200).json({ cart: formattedCart, message: 'Cart retrieved successfully' });
// // //     } catch (error) {
// // //         console.error("Error fetching cart contents:", error);
// // //         // Handle any errors that occur during the process
// // //         res.status(500).json({ error: 'Server error', details: error.message });
// // //     }
// // // };

// // // Import UUID for unique order IDs

// // // Controller to checkout the cart for the user session
// // // const checkoutCart = async (req, res) => {
// // //     try {
// // //       // Extract user_id from request body
// // //       const { user_id } = req.body; // Get user_id from the request body
  
// // //       // Validate the user session and cart contents
// // //       if (!req.session.cart || req.session.cart.length === 0) {
// // //         return res.status(400).json({ message: "Cart is empty." });
// // //       }
  
// // //       // Extract cart contents from the session
// // //       const cartItems = req.session.cart;
  
// // //       // Validate and process each cart item (e.g., check availability, price, etc.)
// // //       // Assuming you have a function to validate items
// // //       // You might want to do a lookup to check if all items are available
// // //       const orderItems = [];
// // //       for (const item of cartItems) {
// // //         const ticket = await Ticket.findById(item.ticketId); // Assuming ticketId is stored in the cart
// // //         if (!ticket) {
// // //           return res.status(404).json({ message: `Ticket not found: ${item.ticketId}` });
// // //         }
// // //         orderItems.push(ticket._id); // Add ticket ID to order items
// // //       }
  
// // //       // Create a new order with the cart contents
// // //       const order = new Order({
// // //         order_id: `ORDER-${Date.now()}-${Math.floor(Math.random() * 10000)}`, // Example order_id generation
// // //         user_id, // Use the user_id from request body
// // //         order_items: orderItems,
// // //         purchase_timestamp: new Date(),
// // //       });
  
// // //       // Save the order to the database
// // //       await order.save();
  
// // //       // Clear the cart in the session
// // //       req.session.cart = [];
  
// // //       // Return success response with order details
// // //       res.status(201).json({
// // //         message: "Order created successfully",
// // //         order,
// // //       });
// // //     } catch (error) {
// // //       // Handle any errors that occur during the process
// // //       console.error("Error during checkout:", error);
// // //       res.status(500).json({ error: 'Internal Server Error', details: error.message });
// // //     }
// // //   };



// // const getCartContents = (req, res) => {
// //     try {
// //         // Validate the user session
// //         console.log('Session data:', req.session); // Log the session data

// //         if (!req.session || !req.session.cart) {
// //             return res.status(200).json({ cart: [], message: 'Cart is empty' });
// //         }

// //         const cartItems = req.session.cart;
// //         const formattedCart = cartItems.map(item => ({
// //             ticketId: item.ticketId,
// //             quantity: item.quantity
// //         }));

// //         res.status(200).json({ cart: formattedCart, message: 'Cart retrieved successfully' });
// //     } catch (error) {
// //         console.error("Error fetching cart contents:", error);
// //         res.status(500).json({ error: 'Server error', details: error.message });
// //     }
// // };


// // // const checkoutCart = async (req, res) => {
// // //     try {
// // //       // Extract user_id from request body
// // //       const { user_id } = req.body; // Get user_id from the request body
  
// // //       // Validate the user session and cart contents
// // //       if (!req.session.cart || req.session.cart.length === 0) {
// // //         return res.status(400).json({ message: "Cart is empty." });
// // //       }
  
// // //       // Extract cart contents from the session
// // //       const cartItems = req.session.cart;
  
// // //       // Validate and process each cart item
// // //       const orderItems = [];
// // //       for (const item of cartItems) {
// // //         const ticket = await Ticket.findById(item.ticketId); // Assuming ticketId is stored in the cart
// // //         if (!ticket) {
// // //           return res.status(404).json({ message: `Ticket not found: ${item.ticketId}` });
// // //         }
  
// // //         // Add the ticketId and quantity to orderItems
// // //         orderItems.push({
// // //           ticketId: ticket._id, // Add the actual ObjectId here
// // //           quantity: item.quantity || 1, // You might want to ensure there's a quantity
// // //         });
// // //       }
  
// // //       // Create a new order with the cart contents
// // //       const order = new Order({
// // //         order_id: `ORDER-${Date.now()}-${Math.floor(Math.random() * 10000)}`, // Manually set order_id
// // //         user_id, // Use the user_id from request body
// // //         order_items: orderItems,
// // //         purchase_timestamp: new Date(),
// // //       });
  
// // //       // Save the order to the database
// // //       await order.save();
  
// // //       // Clear the cart in the session
// // //       req.session.cart = [];
  
// // //       // Return success response with order details
// // //       res.status(201).json({
// // //         message: "Order created successfully",
// // //         order,
// // //       });
// // //     } catch (error) {
// // //       console.error("Error during checkout:", error);
// // //       res.status(500).json({ error: 'Internal Server Error', details: error.message });
// // //     }
// // //   };




// // const checkoutCart = async (req, res) => {
// //   try {
// //       // Extract email from request body
// //       const { email } = req.body;

// //       // Log the received email
// //       console.log("Received email for checkout:", email);

// //       // Validate email input
// //       if (!email) {
// //           console.log("Email is required.");
// //           return res.status(400).json({ message: "Email is required." });
// //       }

// //       // Find the user by email
// //       const user = await User.findOne({ email });
// //       console.log("User found:", user);

// //       if (!user) {
// //           console.log("User not found for email:", email);
// //           return res.status(404).json({ message: "User not found." });
// //       }

// //       // Extract user_id from the found user
// //       const user_id = user._id; // Get the user ID
// //       console.log("User ID extracted:", user_id);

// //       // Validate the user session and cart contents
// //       if (!req.session.cart || req.session.cart.length === 0) {
// //           console.log("Cart is empty or not found in session.");
// //           return res.status(400).json({ message: "Cart is empty." });
// //       }

// //       // Extract cart contents from the session
// //       const cartItems = req.session.cart;
// //       console.log("Cart items:", cartItems);

// //       // Validate and process each cart item
// //       const orderItems = [];
// //       for (const item of cartItems) {
// //           console.log("Processing item:", item);
// //           const ticket = await Ticket.findById(item.ticketId); // Fetch ticket by ID
// //           if (!ticket) {
// //               console.log("Ticket not found:", item.ticketId);
// //               return res.status(404).json({ message: `Ticket not found: ${item.ticketId}` });
// //           }

// //           // Add the ticketId and quantity to orderItems
// //           orderItems.push({
// //               ticketId: ticket._id, // Add the actual ObjectId here
// //               quantity: item.quantity || 1, // Ensure there's a quantity
// //           });
// //       }

// //       // Create a new order with the cart contents
// //       const order = new Order({
// //           order_id: `ORDER-${Date.now()}-${Math.floor(Math.random() * 10000)}`, // Generate unique order_id
// //           user_id, // Use the found user_id
// //           order_items: orderItems, // Attach processed order items
// //           purchase_timestamp: new Date(), // Set the purchase timestamp
// //       });

// //       // Log order details before saving
// //       console.log("Order details before saving:", order);

// //       // Save the order to the database
// //       await order.save();

// //       // Clear the cart in the session
// //       req.session.cart = [];
// //       console.log("Cart cleared in session after order.");

// //       // Return success response with order details
// //       res.status(201).json({
// //           message: "Order created successfully",
// //           order,
// //       });
// //   } catch (error) {
// //       console.error("Error during checkout:", error);
// //       res.status(500).json({ error: 'Internal Server Error', details: error.message });
// //   }
// // };

  
  
  
// //   module.exports = {
// //     addToCart,
// //     removeFromCart,
// //     getCartContents,
// //     checkoutCart,
// //     // Other controller functions
// //   };







// const removeFromCart = (req, res) => {
//     try {
//         // Extract ticket ID from the request parameters
//         const { id } = req.params;

//         // Validate the user session
//         if (!req.session.cart) {
//             return res.status(400).json({ message: 'Cart is empty or not initialized.' });
//         }

//         // Find the index of the ticket in the cart
//         const ticketIndex = req.session.cart.findIndex(item => item.ticketId === id);

//         // Check if the ticket exists in the cart
//         if (ticketIndex === -1) {
//             return res.status(404).json({ message: 'Ticket not found in cart.' });
//         }

//         // Remove the ticket from the cart in the session
//         req.session.cart.splice(ticketIndex, 1);

//         // Return success response with updated cart details
//         return res.status(200).json({ message: 'Ticket removed from cart successfully.', cart: req.session.cart });
//     } catch (error) {
//         // Handle any errors that occur during the process
//         console.error("Error removing ticket from cart:", error);
//         res.status(500).json({ error: 'Server error', details: error.message });
//     }
// };




















// // Import necessary modules (e.g., database models for ticket details, if applicable)
// const Ticket = require('../models/Ticket'); // Assuming you have a Ticket model

// // Controller to add a ticket to the user's cart
// const addToCart = async (req, res) => {
//     try {
//         // Extract ticket ID from the request body
//         const { ticketId } = req.body;

//         // Validate the ticket ID
//         if (!ticketId) {
//             return res.status(400).json({ error: 'Ticket ID is required' });
//         }

//         // Fetch the ticket details from the database
//         const ticket = await Ticket.findById(ticketId); // Assuming you have a Ticket model
//         if (!ticket) {
//             return res.status(404).json({ error: 'Ticket not found' });
//         }

//         // Check if cart exists in session, if not, create a new cart
//         if (!req.session.cart) {
//             req.session.cart = [];
//         }

//         // Check if the ticket is already in the cart
//         const existingTicketIndex = req.session.cart.findIndex(item => item.ticketId === ticketId);
//         if (existingTicketIndex !== -1) {
//             // Increment quantity if the ticket already exists
//             req.session.cart[existingTicketIndex].quantity += 1;
//         } else {
//             // Add new ticket with quantity of 1 and store additional ticket data
//             req.session.cart.push({ ticketId, quantity: 1, ...ticket._doc });
//         }

//         // Return success response with updated cart details
//         return res.status(200).json({ message: 'Ticket added to cart', cart: req.session.cart });
//     } catch (error) {
//         // Handle any errors that occur during the process
//         console.error('Error adding ticket to cart:', error);
//         res.status(500).json({ error: 'Server error' });
//     }
// };

// // Controller to get the contents of the user's cart
// const getCartContents = async (req, res) => {
//     try {
//         // Validate the user session
//         if (!req.session.cart || req.session.cart.length === 0) {
//             return res.status(200).json({ message: 'Cart is empty', cart: [] });
//         }

//         // Retrieve the cart from the user's session
//         const userCart = req.session.cart;

//         // Fetch ticket details for each ticket ID in the cart
//         const tickets = await Ticket.find({ _id: { $in: userCart.map(item => item.ticketId) } });

//         // Create an array to return cart items with quantities and ticket details
//         const cartItems = tickets.map(ticket => {
//             const cartItem = userCart.find(item => item.ticketId === ticket._id.toString());
//             return {
//                 ticket,
//                 quantity: cartItem.quantity,
//             };
//         });

//         // Return the cart contents with ticket details
//         return res.status(200).json({ cart: cartItems });
//     } catch (error) {
//         console.error('Error fetching cart contents:', error);
//         return res.status(500).json({ error: 'Server error' });
//     }
// };

// module.exports = {
//     addToCart,
//     getCartContents,
//     // Other controller functions can be added here
// };




























// Import necessary modules (e.g., database models for ticket details, if applicable)
const Ticket = require('../models/Ticket'); // Assuming you have a Ticket model
const Cart = require('../models/Cart'); // Import the Cart model

// Controller to add a ticket to the user's cart

// const addToCart = async (req, res) => {
//     try {
//         const { userId, ticketId } = req.body;

//         // Validate userId and ticketId
//         if (!userId || !ticketId) {
//             return res.status(400).json({ error: 'User ID and Ticket ID are required' });
//         }

//         // Fetch the ticket details from the database
//         const ticket = await Ticket.findById(ticketId);
//         if (!ticket) {
//             return res.status(404).json({ error: 'Ticket not found' });
//         }

//         // Find the cart for the user, or create a new one if it doesn't exist
//         let cart = await Cart.findOne({ user_id: userId });

//         if (!cart) {
//             // Create a new cart if it doesn't exist
//             cart = new Cart({
//                 user_id: userId,
//                 items: [{ ticket: ticket, quantity: 1 }]
//             });
//         } else {
//             // Check if the ticket is already in the cart
//             const existingTicketIndex = cart.items.findIndex(item => item.ticket._id.toString() === ticketId);
//             if (existingTicketIndex !== -1) {
//                 // Increment quantity if the ticket already exists
//                 cart.items[existingTicketIndex].quantity += 1;
//             } else {
//                 // Add new ticket with quantity of 1
//                 cart.items.push({ ticket: ticket, quantity: 1 });
//             }
//         }

//         // Save the cart to the database
//         await cart.save();

//         // Return success response with updated cart details
//         return res.status(200).json({ message: 'Ticket added to cart', cart });
//     } catch (error) {
//         console.error('Error adding ticket to cart:', error);
//         res.status(500).json({ error: 'Server error' });
//     }
// };


// const addToCart = async (req, res) => {
//     try {
//         // Destructure userId and ticketId from req.body
//         const { userId, ticketId } = req.body;

//         // Validate userId and ticketId
//         if (!userId || !ticketId) {
//             return res.status(400).json({ error: 'User ID and Ticket ID are required' });
//         }

//         // Fetch the ticket details from the database
//         const ticket = await Ticket.findById(ticketId);
//         if (!ticket) {
//             return res.status(404).json({ error: 'Ticket not found' });
//         }

//         // Find the cart for the user, or create a new one if it doesn't exist
//         let cart = await Cart.findOne({ user_id: userId });

//         if (!cart) {
//             // Create a new cart if it doesn't exist
//             cart = new Cart({
//                 user_id: userId,
//                 items: [{ ticket: ticket, quantity: 1 }]
//             });
//         } else {
//             // Check if the ticket is already in the cart
//             const existingTicketIndex = cart.items.findIndex(item => item.ticket._id.toString() === ticketId);
//             if (existingTicketIndex !== -1) {
//                 // Increment quantity if the ticket already exists
//                 cart.items[existingTicketIndex].quantity += 1;
//             } else {
//                 // Add new ticket with quantity of 1
//                 cart.items.push({ ticket: ticket, quantity: 1 });
//             }
//         }

//         // Save the cart to the database
//         await cart.save();

//         // Return success response with updated cart details
//         return res.status(200).json({ message: 'Ticket added to cart', cart });
//     } catch (error) {
//         console.error('Error adding ticket to cart:', error);
//         res.status(500).json({ error: 'Server error' });
//     }
// };


const addToCart = async (req, res) => {
    try {
        // Destructure userId and ticketId from req.body
        const { userId, ticketId } = req.body;

        // Validate userId and ticketId
        if (!userId || !ticketId) {
            return res.status(400).json({ error: 'User ID and Ticket ID are required' });
        }

        // Fetch the ticket details from the database
        const ticket = await Ticket.findById(ticketId);
        if (!ticket) {
            return res.status(404).json({ error: 'Ticket not found' });
        }

        // Find the cart for the user, or create a new one if it doesn't exist
        let cart = await Cart.findOne({ user_id: userId });

        if (!cart) {
            // Create a new cart if it doesn't exist
            cart = new Cart({
                user_id: userId,
                items: [{ ticket: ticket, quantity: 1 }]
            });
        } else {
            // Check if the ticket is already in the cart
            const existingTicketIndex = cart.items.findIndex(item => item.ticket._id.toString() === ticketId);
            if (existingTicketIndex !== -1) {
                // Increment quantity if the ticket already exists
                cart.items[existingTicketIndex].quantity += 1;
            } else {
                // Add new ticket with quantity of 1
                cart.items.push({ ticket: ticket, quantity: 1 });
            }
        }

        // Save the cart to the database
        await cart.save();

        // Return success response with updated cart details
        return res.status(200).json({ message: 'Ticket added to cart', cart });
    } catch (error) {
        console.error('Error adding ticket to cart:', error);
        res.status(500).json({ error: 'Server error' });
    }
};



// Controller to get the contents of the user's cart
const getCartContents = async (req, res) => {
    try {
        const userId = req.params.userId; // Get the user ID from the request parameters

        // Validate the user ID
        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' });
        }

        // Find the cart for the specified user
        const userCart = await Cart.findOne({ user_id: userId }).populate('items.ticket');

        // If the cart is empty or doesn't exist
        if (!userCart || userCart.items.length === 0) {
            return res.status(200).json({ message: 'Cart is empty...', cart: [] });
        }

        // Return the cart contents with ticket details
        return res.status(200).json({ cart: userCart.items });
    } catch (error) {
        console.error('Error fetching cart contents:', error);
        return res.status(500).json({ error: 'Server error' });
    }
};



// const removeFromCart = async (req, res) => {
//     try {
//         const userId = req.params.userId; // User ID from URL
//         const ticketId = req.body.ticketId; // Ticket ID from request body

//         console.log(`Attempting to remove ticketId: ${ticketId} for userId: ${userId}`);

//         // Validate userId and ticketId
//         if (!userId || !ticketId) {
//             return res.status(400).json({ error: 'User ID and Ticket ID are required' });
//         }

//         // Find the cart for the user
//         const cart = await Cart.findOne({ user_id: userId });

//         console.log('Cart found:', cart);

//         // Check if cart exists
//         if (!cart || cart.items.length === 0) {
//             return res.status(404).json({ message: "Cart is empty." });
//         }

//         // Find the index of the ticket to remove
//         const ticketIndex = cart.items.findIndex(item => item.ticket._id.toString() === ticketId);

//         console.log(`Ticket index found: ${ticketIndex}`);

//         // If ticket does not exist in the cart
//         if (ticketIndex === -1) {
//             return res.status(404).json({ message: "Ticket not found in cart." });
//         }

//         // Remove the ticket from the cart
//         cart.items.splice(ticketIndex, 1);

//         // Save the updated cart
//         await cart.save();

//         // Return success response with updated cart details
//         return res.status(200).json({
//             message: "Ticket removed from cart.",
//             cart
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error." });
//     }
// };


const removeFromCart = async (req, res) => {
    try {
        const userId = req.params.userId; // User ID from URL
        const ticketId = req.body.ticketId; // Ticket ID from request body

        console.log(`Attempting to remove ticketId: ${ticketId} for userId: ${userId}`);

        // Validate userId and ticketId
        if (!userId || !ticketId) {
            return res.status(400).json({ error: 'User ID and Ticket ID are required' });
        }

        // Find the ticket by ticket_Id to get the _id
        const ticket = await Ticket.findOne({ ticket_Id: ticketId });
        
        if (!ticket) {
            return res.status(404).json({ message: "Ticket not found." });
        }

        // Extract the ticket's _id
        const ticketMongoId = ticket._id;

        // Find the cart for the user
        const cart = await Cart.findOne({ user_id: userId });

        console.log('Cart found:', cart);

        // Check if cart exists
        if (!cart || cart.items.length === 0) {
            return res.status(404).json({ message: "Cart is empty." });
        }

        // Find the index of the ticket to remove
        const ticketIndex = cart.items.findIndex(item => item.ticket._id.toString() === ticketMongoId.toString());

        console.log(`Ticket index found: ${ticketIndex}`);

        // If ticket does not exist in the cart
        if (ticketIndex === -1) {
            return res.status(404).json({ message: "Ticket not found in cart." });
        }

        // Remove the ticket from the cart
        cart.items.splice(ticketIndex, 1);

        // Save the updated cart
        await cart.save();

        // Return success response with updated cart details
        return res.status(200).json({
            message: "Ticket removed from cart.",
            cart
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error." });
    }
};



  

  


module.exports = {
    addToCart,
    getCartContents,
    removeFromCart,

};
