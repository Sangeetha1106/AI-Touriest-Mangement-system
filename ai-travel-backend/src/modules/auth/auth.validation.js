const { BAD_REQUEST } = require('../../shared/constants/statusCodes');

/**
 * Validation rules for user registration
 */
const validateRegister = (req, res, next) => {
  const { name, email, password } = req.body;
  const errors = [];

  // 1. Name validation
  if (!name || name.trim().length === 0) {
    errors.push('Name is required');
  }

  // 2. Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push('A valid email address is required');
  }

  // 3. Password validation
  if (!password || password.length < 6) {
    errors.push('Password must be at least 6 characters long');
  }

  if (errors.length > 0) {
    return res.status(BAD_REQUEST).json({
      success: false,
      message: 'Validation failed',
      errors: errors
    });
  }

  next();
};

/**
 * Validation rules for user login
 */
const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];

  // 1. Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push('A valid email address is required');
  }

  // 2. Password validation
  if (!password) {
    errors.push('Password is required');
  }

  if (errors.length > 0) {
    return res.status(BAD_REQUEST).json({
      success: false,
      message: 'Validation failed',
      errors: errors
    });
  }

  next();
};

module.exports = {
  validateRegister,
  validateLogin
};
