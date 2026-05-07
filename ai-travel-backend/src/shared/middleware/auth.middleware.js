const jwt = require('jsonwebtoken');
const { UNAUTHORIZED, FORBIDDEN } = require('../constants/statusCodes');

/**
 * Middleware to authenticate the JWT token
 */
const authenticate = (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      if (!decoded.id || !decoded.role) {
        return res.status(UNAUTHORIZED).json({ success: false, message: 'Invalid token payload' });
      }

      req.user = decoded;
      next();
    } catch (error) {
      return res.status(UNAUTHORIZED).json({ success: false, message: 'Invalid or expired token' });
    }
  }

  if (!token) {
    return res.status(UNAUTHORIZED).json({ success: false, message: 'Access denied. No token provided.' });
  }
};

/**
 * Middleware to authorize based on specific roles
 */
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(FORBIDDEN).json({
        success: false,
        message: 'Access denied. You do not have permission to perform this action.'
      });
    }
    next();
  };
};

module.exports = {
  authenticate,
  authorize
};
