// // // // const express = require('express');
// // // // const router =express.Router();
// // // // const session = require('express-session');
// // // // const authMiddleware = require('../middleware/authMiddleware');
// // // // const {addToCart} = require('../controllers/cartController');

// // // // // initialize session middleware

// // // // router.use(session({
// // // //     secret: process.env.SESSION_SECRET || "your_session_secret_key",
// // // //     resave:false,
// // // //     saveUninitialized:true,
// // // //     cookie:{secure:false}
// // // // }));
// // // //   router.post('/add', authMiddleware,addToCart);
// // // // // router.post('/add', authMiddleware,(req,res)=>{
// // // // //     const {ticketId} = req.body;
// // // // // // if ticket is given or not
// // // // //     if(!ticketId){
// // // // //         return res.status(400).json({message:'Ticket ID is Required'});
// // // // //     }
// // // // // // initialize cart
// // // // //     if(!req.session.cart){
// // // // //         req.session.cart=[];
// // // // //     }

// // // // //     // check if ticket is already

// // // // //     const existingTicketIndex = req.session.cart.findIndex(ticket=>ticket.ticketId===ticketId);
// // // // //     if(existingTicketIndex !== -1){
// // // // //         return res.status(400).json({message:'Ticket is already in the cart'});
// // // // //     }

// // // // //     // add ticket to cart

// // // // //     req.session.cart.push({ticketId});
// // // // //     res.status(200).json({
// // // // //         message:'ticket is added to cart',
// // // // //         cart:req.session.cart
// // // // //     });
// // // // // });

// // // // module.exports= router;


// // // // const express = require('express');
// // // // const router =express.Router();
// // // // const session = require('express-session');
// // // // const authMiddleware = require('../middleware/authMiddleware');
// // // // const {addToCart} = require('../controllers/cartController');

// // // // // initialize session middleware

// // // // router.use(session({
// // // //     secret: process.env.SESSION_SECRET || "your_session_secret_key",
// // // //     resave:false,
// // // //     saveUninitialized:true,
// // // //     // cookie:{secure:false}
// // // // }));
// // // //   router.post('/add', authMiddleware,addToCart);


// // // // module.exports= router;








// // // const express = require('express');
// // // const router = express.Router();
// // // const session = require('express-session');
// // // const authMiddleware = require('../middleware/authMiddleware'); // Ensure correct path
// // // const { addToCart, getCartContents } = require('../controllers/cartController'); // Ensure correct path
// // // const userMiddleware = require('../middleware/userMiddleware');

// // // // Initialize session middleware
// // // router.use(session({
// // //     secret: process.env.SESSION_SECRET || "your_session_secret_key",
// // //     resave: false,
// // //     saveUninitialized: true,
// // //     // cookie: { secure: true } // Uncomment if using HTTPS
// // // }));

// // // // Add item to cart
// // // router.post('/add', userMiddleware, addToCart);

// // // // fetch tickets

// // // router.get('/', userMiddleware, getCartContents); // Ensure user is authenticated

// // // // Error handling middleware
// // // router.use((err, req, res, next) => {
// // //     console.error(err.stack);
// // //     res.status(500).send('Something broke!');
// // // });

// // // // Error handling middleware
// // // router.use((err, req, res, next) => {
// // //     console.error(err.stack);
// // //     res.status(500).send('Something broke!');
// // // });

// // // module.exports = router;






// // // routes/cartRoutes.js
// // const express = require('express');
// // const router = express.Router();
// // const session = require('express-session');
// // const authMiddleware = require('../middleware/authMiddleware'); // Ensure correct path
// // const { addToCart, getCartContents, removeFromCart } = require('../controllers/cartController'); // Include removeFromCart
// // const userMiddleware = require('../middleware/userMiddleware');
// // const { authenticateJWT } = require('../middleware/authMiddleware'); // Import the JWT middleware

// // // Initialize session middleware
// // router.use(session({
// //     secret: process.env.SESSION_SECRET || "your_session_secret_key",
// //     resave: false,
// //     saveUninitialized: true,
// //     // cookie: { secure: true } // Uncomment if using HTTPS
// // }));

// // // Add item to cart
// // router.post('/add', userMiddleware, addToCart);

// // // Fetch tickets in cart
// // router.get('/', userMiddleware, getCartContents); // Ensure user is authenticated

// // // Remove ticket from cart
// // router.delete('/remove/:id', userMiddleware, removeFromCart); // Use the new removeFromCart route

// // // Error handling middleware
// // router.use((err, req, res, next) => {
// //     console.error(err.stack);
// //     res.status(500).send('Something broke!');
// // });

// // module.exports = router;











// const express = require('express');
// const router = express.Router();
// const session = require('express-session');
// const authMiddleware = require('../middleware/authMiddleware'); // Ensure correct path
// const {
//     addToCart,
//     getCartContents,
//     removeFromCart,
//     checkoutCart 
// } = require('../controllers/cartController'); // Include checkoutCart
// const userMiddleware = require('../middleware/userMiddleware');
// const { authenticateJWT } = require('../middleware/authMiddleware'); // Import the JWT middleware

// // Initialize session middleware
// router.use(session({
//     secret: process.env.SESSION_SECRET || "your_session_secret_key",
//     resave: false,
//     saveUninitialized: true,
//     // cookie: { secure: true } // Uncomment if using HTTPS
// }));

// // Add item to cart
// router.post('/add', userMiddleware, addToCart);

// // Fetch tickets in cart
// router.get('/', userMiddleware, getCartContents); // Ensure user is authenticated

// // Remove ticket from cart
// router.delete('/remove/:id', userMiddleware, removeFromCart); // Use the new removeFromCart route

// // Checkout the cart for the user session
// // @route   POST /cart/checkout
// // @desc    Checkout the cart for the user session
// // @access  Private (JWT authentication required)
// router.post('/checkout', userMiddleware, checkoutCart);

// module.exports = router;











// routes/cartRoutes.js

const express = require('express');
const session = require('express-session');
const authenticateJWT = require('../middleware/authenticateJWT');
const { addToCart, getCartContents, removeFromCart } = require('../controllers/cartController'); // Import the necessary controllers
const userMiddleware = require('../middleware/userMiddleware');

const router = express.Router();

// Setup express-session middleware
router.use(session({
    secret: 'your_secret_key', // Replace with your own secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

// @route   POST /add 
// @desc    Add a ticket to the user's cart
// @access  Private (JWT authentication required)
router.post('/add/:userId', userMiddleware, addToCart); 

// @route   GET /cart
// @desc    Fetch the tickets added to the user's cart
// @access  Private (JWT authentication required)
router.get('/:userId', userMiddleware, getCartContents);


// router.delete('/remove/:id', userMiddleware, removeFromCart);
// Route definition
router.delete('/remove/:userId', userMiddleware, removeFromCart);


module.exports = router;


