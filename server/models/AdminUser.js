const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the schema for admin users
const adminUserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true  // Trims whitespace from the username
  },
  password: {
    type: String,
    required: true
  },
  // Additional fields can be added here
  // For example:
  // role: {
  //   type: String,
  //   default: 'admin' // Example default value for an admin role
  // }
});

// Pre-save hook to hash the password before saving the admin user
adminUserSchema.pre('save', async function (next) {
  // Check if the password is modified or if it is a new document
  if (!this.isModified('password')) {
    return next();
  }
  
  try {
    // Generate salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    
    // Set the hashed password
    this.password = hashedPassword;
    
    // Proceed to the next middleware
    next();
  } catch (error) {
    return next(error);
  }
});

// Method to compare provided password with the hashed password
adminUserSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    // Compare the provided password with the stored hashed password
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw new Error('Password comparison error');
  }
};

// Create and export the model
const AdminUser = mongoose.model('AdminUser', adminUserSchema);
module.exports = AdminUser;
