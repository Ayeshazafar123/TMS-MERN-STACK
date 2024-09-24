
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




const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Admin routes
const userRoutes = require('./routes/userRoutes'); // User routes
const ticketCategoryRoutes = require('./routes/ticketCategoryRoutes'); // Ticket category routes
const ticketRoutes = require('./routes/ticketRoutes'); // Ticket routes
const path = require('path'); // Import path module

dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use CORS middleware
app.use(cors()); // Enable CORS for all routes

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Use the auth routes for admin
app.use('/admin', authRoutes);

// Use the user routes for regular users
app.use('/user', userRoutes);

// Use the ticket category routes
app.use('/ticket', ticketCategoryRoutes); // Set the base URL for ticket categories

// Use the ticket routes
app.use('/tickets', ticketRoutes); // Set the base URL for tickets

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
