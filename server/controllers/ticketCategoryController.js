// // const Category = require('../models/ticketCategoryModel'); // Import the Mongoose model
// // const { body, validationResult } = require('express-validator'); // Import express-validator for validation

// // // @desc    Create a new ticket category
// // // @access  Public (or modify to require authentication)
// // const createCategory = async (req, res) => {
// //   try {
// //     // Extract validation errors from the request
// //     const errors = validationResult(req);
// //     if (!errors.isEmpty()) {
// //       return res.status(400).json({ errors: errors.array() });
// //     }

// //     const { category_Id, category_Name, category_Description, isActive } = req.body;

// //     // Check if the category already exists by category_Id
// //     const existingCategory = await Category.findOne({ category_Id });
// //     if (existingCategory) {
// //       return res.status(400).json({ error: 'Category ID already exists' });
// //     }

// //     // Create a new category object
// //     const newCategory = new Category({
// //       category_Id,
// //       category_Name,
// //       category_Description,
// //       isActive,
// //     });

// //     // Save the new category to the database
// //     const savedCategory = await newCategory.save();

// //     // Return a success response with the created category's details
// //     res.status(201).json(savedCategory);
// //   } catch (error) {
// //     // Handle any errors that occur during the process
// //     console.error(error.message);
// //     res.status(500).json({ error: 'Server error' });
// //   }
// // };

// // // Validation middleware
// // const validateCategory = [
// //   body('category_Id').not().isEmpty().withMessage('Category ID is required'),
// //   body('category_Name').not().isEmpty().withMessage('Category Name is required'),
// //   body('category_Description').isLength({ min: 10 }).withMessage('Category Description must be at least 10 characters long'),
// //   body('isActive').isBoolean().withMessage('isActive must be a boolean value'), // Optional: Validate if isActive is a boolean
// //   // Additional validations can be added here if needed
// // ];

// // module.exports = {
// //   createCategory,
// //   validateCategory, // Export the validation middleware
// // };

// const Category = require('../models/ticketCategoryModel'); // Import the Mongoose model
// const { body, validationResult } = require('express-validator'); // Import express-validator for validation

// // Function to create a new category
// const createCategory = async (req, res) => {
//   try {
//     // Extract validation errors from the request
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     // Extract category details from the request body
//     const { category_Id, category_Name, category_Description, isActive } = req.body;

//     // Create new category
//     const category = new Category({
//       category_Id,
//       category_Name,
//       category_Description,
//       isActive,
//     });

//     // Save the new category to the database
//     await category.save();

//     // Return a success response
//     res.status(201).json({ message: 'Category created successfully', category });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Function to update an existing category
// const updateCategory = async (req, res) => {
//   try {
//     // Extract validation errors from the request
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     // Extract category ID from the request parameters
//     const { id } = req.params;

//     // Extract category details from the request body
//     const { category_Name, category_Description, isActive } = req.body;

//     // Find the category by ID in the database
//     let category = await Category.findById(id);

//     // If category not found, return an error response
//     if (!category) {
//       return res.status(404).json({ error: 'Category not found' });
//     }

//     // Update the category with new details
//     category.category_Name = category_Name || category.category_Name;
//     category.category_Description = category_Description || category.category_Description;
//     category.isActive = typeof isActive === 'boolean' ? isActive : category.isActive;

//     // Save the updated category to the database
//     const updatedCategory = await category.save();

//     // Return a success response with the updated category's details
//     res.status(200).json({
//       message: 'Category updated successfully',
//       updatedCategory,
//     });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Validation middleware for creating a category
// const validateCategory = [
//   body('category_Id').not().isEmpty().withMessage('Category ID is required'),
//   body('category_Name').not().isEmpty().withMessage('Category Name is required'),
//   body('category_Description').isLength({ min: 10 }).withMessage('Category Description must be at least 10 characters long'),
//   body('isActive').isBoolean().withMessage('isActive must be a boolean value'), // Optional: Validate if isActive is a boolean
// ];

// // Validation middleware for updating a category
// const validateCategoryUpdate = [
//   body('category_Name').optional().not().isEmpty().withMessage('Category Name is required'),
//   body('category_Description').optional().isLength({ min: 10 }).withMessage('Category Description must be at least 10 characters long'),
//   body('isActive').optional().isBoolean().withMessage('isActive must be a boolean value'), 
// ];

// // Export the functions and validation middleware
// module.exports = {
//   createCategory,
//   updateCategory,
//   validateCategory,
//   validateCategoryUpdate,
// };


// const Category = require('../models/ticketCategoryModel'); // Import the Mongoose model
// const { body, validationResult } = require('express-validator'); // Import express-validator for validation

// // Function to create a new category
// const createCategory = async (req, res) => {
//   try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { category_Id, category_Name, category_Description, isActive } = req.body;

//     const category = new Category({
//       category_Id,
//       category_Name,
//       category_Description,
//       isActive,
//     });

//     await category.save();
//     res.status(201).json({ message: 'Category created successfully', category });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Function to update an existing category
// const updateCategory = async (req, res) => {
//   try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { id } = req.params;
//     const { category_Name, category_Description, isActive } = req.body;

//     let category = await Category.findById(id);
//     if (!category) {
//       return res.status(404).json({ error: 'Category not found' });
//     }

//     category.category_Name = category_Name || category.category_Name;
//     category.category_Description = category_Description || category.category_Description;
//     category.isActive = typeof isActive === 'boolean' ? isActive : category.isActive;

//     const updatedCategory = await category.save();
//     res.status(200).json({
//       message: 'Category updated successfully',
//       updatedCategory,
//     });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Function to delete a category by ID
// const deleteCategory = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedCategory = await Category.findByIdAndDelete(id);

//     if (!deletedCategory) {
//       return res.status(404).json({ error: 'Category not found' });
//     }

//     res.status(200).json({ message: 'Category deleted successfully' });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Validation middleware for creating a category
// const validateCategory = [
//   body('category_Id').not().isEmpty().withMessage('Category ID is required'),
//   body('category_Name').not().isEmpty().withMessage('Category Name is required'),
//   body('category_Description').isLength({ min: 10 }).withMessage('Category Description must be at least 10 characters long'),
//   body('isActive').isBoolean().withMessage('isActive must be a boolean value'),
// ];

// // Validation middleware for updating a category
// const validateCategoryUpdate = [
//   body('category_Name').optional().not().isEmpty().withMessage('Category Name is required'),
//   body('category_Description').optional().isLength({ min: 10 }).withMessage('Category Description must be at least 10 characters long'),
//   body('isActive').optional().isBoolean().withMessage('isActive must be a boolean value'),
// ];

// // Export the functions and validation middleware
// module.exports = {
//   createCategory,
//   updateCategory,
//   deleteCategory,
//   validateCategory,
//   validateCategoryUpdate,
// };




const Category = require('../models/ticketCategoryModel'); // Import the Mongoose model
const { body, validationResult } = require('express-validator'); // Import express-validator for validation

// Function to create a new category
const createCategory = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { category_Id, category_Name, category_Description, isActive } = req.body;

    const category = new Category({
      category_Id,
      category_Name,
      category_Description,
      isActive,
    });

    await category.save();
    res.status(201).json({ success: true, message: 'Category created successfully', category });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

// Function to update an existing category
const updateCategory = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { id } = req.params;
    const { category_Name, category_Description, isActive } = req.body;

    // Validate the ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, error: 'Invalid category ID' });
    }

    let category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ success: false, error: 'Category not found' });
    }

    category.category_Name = category_Name || category.category_Name;
    category.category_Description = category_Description || category.category_Description;
    category.isActive = typeof isActive === 'boolean' ? isActive : category.isActive;

    const updatedCategory = await category.save();
    res.status(200).json({ success: true, message: 'Category updated successfully', updatedCategory });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

// Function to delete a category by ID
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate the ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, error: 'Invalid category ID' });
    }

    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) {
      return res.status(404).json({ success: false, error: 'Category not found' });
    }

    res.status(200).json({ success: true, message: 'Category deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

// Validation middleware for creating a category
const validateCategory = [
  body('category_Id').not().isEmpty().withMessage('Category ID is required'),
  body('category_Name').not().isEmpty().withMessage('Category Name is required'),
  body('category_Description').isLength({ min: 10 }).withMessage('Category Description must be at least 10 characters long'),
  body('isActive').isBoolean().withMessage('isActive must be a boolean value'),
];

// Validation middleware for updating a category
const validateCategoryUpdate = [
  body('category_Name').optional().not().isEmpty().withMessage('Category Name is required'),
  body('category_Description').optional().isLength({ min: 10 }).withMessage('Category Description must be at least 10 characters long'),
  body('isActive').optional().isBoolean().withMessage('isActive must be a boolean value'),
];

// Export the functions and validation middleware
module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  validateCategory,
  validateCategoryUpdate,
};
