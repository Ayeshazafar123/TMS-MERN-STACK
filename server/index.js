
// // // // const express = require('express');
// // // // const mongoose = require('mongoose');
// // // // const dotenv = require('dotenv');
// // // // const cors = require('cors'); // Import CORS
// // // // const authRoutes = require('./routes/authRoutes'); // Admin routes
// // // // const userRoutes = require('./routes/userRoutes'); // User routes
// // // // const ticketCategoryRoutes = require('./routes/ticketCategoryRoutes'); // Ticket category routes

// // // // dotenv.config();

// // // // const app = express();

// // // // // Middleware to parse JSON bodies
// // // // app.use(express.json());

// // // // // Use CORS middleware
// // // // app.use(cors()); // Enable CORS for all routes

// // // // // Connect to MongoDB
// // // // mongoose.connect(process.env.MONGO_URI, {
// // // //   useNewUrlParser: true,
// // // //   useUnifiedTopology: true,
// // // // })
// // // // .then(() => console.log('MongoDB connected'))
// // // // .catch(err => console.error(err));

// // // // // Use the auth routes for admin
// // // // app.use('/admin', authRoutes);

// // // // // Use the user routes for regular users
// // // // app.use('/user', userRoutes);

// // // // // Use the ticket category routes
// // // // app.use('/ticket', ticketCategoryRoutes); // Set the base URL for ticket categories

// // // // // Start the server
// // // // const PORT = process.env.PORT || 5000;
// // // // app.listen(PORT, () => {
// // // //   console.log(`Server is running on http://localhost:${PORT}`);
// // // // });

// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const dotenv = require('dotenv');
// // // const cors = require('cors'); // Import CORS
// // // const authRoutes = require('./routes/authRoutes'); // Admin routes
// // // const userRoutes = require('./routes/userRoutes'); // User routes
// // // const ticketCategoryRoutes = require('./routes/ticketCategoryRoutes'); // Ticket category routes

// // // dotenv.config();

// // // const app = express();

// // // // Middleware to parse JSON bodies
// // // app.use(express.json());

// // // // Use CORS middleware
// // // app.use(cors()); // Enable CORS for all routes

// // // // Connect to MongoDB
// // // mongoose.connect(process.env.MONGO_URI, {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true,
// // // })
// // // .then(() => console.log('MongoDB connected'))
// // // .catch(err => console.error('MongoDB connection error:', err));

// // // // Use the auth routes for admin
// // // app.use('/admin', authRoutes);

// // // // Use the user routes for regular users
// // // app.use('/user', userRoutes);

// // // // Use the ticket category routes
// // // app.use('/ticket', ticketCategoryRoutes); // Set the base URL for ticket categories

// // // // Start the server
// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => {
// // //   console.log(`Server is running on http://localhost:${PORT}`);
// // // });



// // const express = require('express');
// // const mongoose = require('mongoose');
// // const dotenv = require('dotenv');
// // const cors = require('cors'); // Import CORS
// // const authRoutes = require('./routes/authRoutes'); // Admin routes
// // const userRoutes = require('./routes/userRoutes'); // User routes
// // const ticketCategoryRoutes = require('./routes/ticketCategoryRoutes'); // Ticket category routes

// // dotenv.config();

// // const app = express();

// // // Middleware to parse JSON bodies
// // app.use(express.json());

// // // Use CORS middleware
// // app.use(cors()); // Enable CORS for all routes

// // // Connect to MongoDB
// // mongoose.connect(process.env.MONGO_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // })
// // .then(() => console.log('MongoDB connected'))
// // .catch(err => console.error('MongoDB connection error:', err));

// // // Use the auth routes for admin
// // app.use('/admin', authRoutes);

// // // Use the user routes for regular users
// // app.use('/user', userRoutes);

// // // Use the ticket category routes
// // app.use('/ticket', ticketCategoryRoutes); // Set the base URL for ticket categories

// // // Handle 404 errors
// // app.use((req, res, next) => {
// //   res.status(404).json({ error: 'Not Found' });
// // });

// // // Global error handling middleware
// // app.use((err, req, res, next) => {
// //   console.error(err.stack);
// //   res.status(500).json({ error: 'Internal Server Error' });
// // });

// // // Start the server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server is running on http://localhost:${PORT}`);
// // });




// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const path = require('path'); // Import the path module
// // const authRoutes = require('./routes/authRoutes');
// const authRoutes = require('./routes/authRoutes')
// const userRoutes = require('./routes/userRoutes');
// const ticketCategoryRoutes = require('./routes/ticketCategoryRoutes');
// const ticketRoutes = require('./routes/ticketRoutes'); // Import the ticket routes

// dotenv.config();

// const app = express();

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Use CORS middleware
// app.use(cors());

// // Serve static files from the 'uploads' directory
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error('MongoDB connection error:', err));

// // Use the auth routes for admin
// app.use('/admin', authRoutes);

// // Use the user routes for regular users
// app.use('/user', userRoutes);

// // Use the ticket category routes
// app.use('/ticket-categories', ticketCategoryRoutes); // Changed base URL

// // Use the ticket routes
// app.use('/tickets', ticketRoutes); // Changed base URL

// // Handle 404 errors
// app.use((req, res, next) => {
//   res.status(404).json({ error: 'Not Found' });
// });

// // Global error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Internal Server Error' });
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

















// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes'); // Admin routes
// const userRoutes = require('./routes/userRoutes'); // User routes
// const ticketCategoryRoutes = require('./routes/ticketCategoryRoutes'); // Ticket category routes
// const ticketRoutes = require('./routes/ticketRoutes'); // Ticket routes
// const homeRoutes = require('./routes/homeRoutes');
// const path = require('path'); 
// const cartRoute = require('./routes/cartRoutes')

// dotenv.config();

// const app = express();

// // Middleware
// app.use(express.json()); // Middleware to parse JSON bodies
// app.use(cors()); // Enable CORS for all routes
// app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files

// // Connect to MongoDB
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (err) {
//     console.error('MongoDB connection error:', err);
//     process.exit(1); // Exit process if unable to connect
//   }
// };

// connectDB(); // Call the function to connect to MongoDB

// // Define routes
// app.use('/admin', authRoutes); // Use the auth routes for admin
// app.use('/user', userRoutes); // Use the user routes for regular users
// app.use('/ticket', ticketCategoryRoutes); // Set the base URL for ticket categories
// app.use('/tickets', ticketRoutes); // Set the base URL for tickets
// app.use('/home', homeRoutes);
// app.use('/cart', cartRoute);

// // Handle 404 errors
// app.use((req, res, next) => {
//   res.status(404).json({ error: 'Not Found' });
// });

// // Global error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Internal Server Error' });
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(Server is running on http://localhost:${PORT});
// });















const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
// const MongoStore = require('connect-mongo');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Admin routes
const userRoutes = require('./routes/userRoutes'); // User routes
const ticketCategoryRoutes = require('./routes/ticketCategoryRoutes'); // Ticket category routes
const ticketRoutes = require('./routes/ticketRoutes'); // Ticket routes
const homeRoutes = require('./routes/homeRoutes');
const path = require('path'); 
const cartRoute = require('./routes/cartRoutes');
const Order = require('./routes/orderRoutes')
const { cookie } = require('express-validator');

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Enable CORS for all routes
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files



//  initialize session middleware
app.use(session({
  secret:process.env.SESSION_SECRET || "your_jwt_secret_key",
  resave:false,
  // store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  saveUninitialized:true,
  // cookie:{secure:false}
}));
// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process if unable to connect
  }
};

connectDB(); // Call the function to connect to MongoDB

// Define routes
app.use('/admin', authRoutes); // Use the auth routes for admin
app.use('/user', userRoutes); // Use the user routes for regular users
app.use('/ticket', ticketCategoryRoutes); // Set the base URL for ticket categories
app.use('/tickets', ticketRoutes); // Set the base URL for tickets
app.use('/home', homeRoutes);
app.use('/cart', cartRoute);
app.use('/order', Order);

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
