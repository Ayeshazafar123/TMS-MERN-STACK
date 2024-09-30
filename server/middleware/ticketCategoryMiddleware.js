
const { body } = require('express-validator');

// Middleware for validating ticket categories on creation
const validateCategory = [
  body('category_Id').not().isEmpty().withMessage('Category ID is required'),
  body('category_Name').not().isEmpty().withMessage('Category Name is required'),
  body('category_Description').isLength({ min: 10 }).withMessage('Category Description must be at least 10 characters long'),
  body('isActive').isBoolean().withMessage('isActive must be a boolean value'),
];

// Middleware for validating ticket categories on update
const validateCategoryUpdate = [
  body('category_Name').optional().not().isEmpty().withMessage('Category Name is required if provided'),
  body('category_Description').optional().isLength({ min: 10 }).withMessage('Category Description must be at least 10 characters long if provided'),
  body('isActive').optional().isBoolean().withMessage('isActive must be a boolean value if provided'),
];

module.exports = {
  validateCategory,
  validateCategoryUpdate,
};
