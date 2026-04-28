const jwt = require('jsonwebtoken');
const { UNAUTHORIZED } = require('../constants/statusCodes');

const authMiddleware = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Ensure the decoded token has the required fields
      if (!decoded.id || !decoded.role) {
        return res.status(UNAUTHORIZED).json({ 
          success: false,
          message: 'Not authorized, token payload invalid' 
        });
      }

      req.user = decoded;
      next();
    } catch (error) {
      return res.status(UNAUTHORIZED).json({ 
        success: false,
        message: 'Not authorized, token failed' 
      });
    }
  }

  if (!token) {
    return res.status(UNAUTHORIZED).json({ 
      success: false,
      message: 'Not authorized, no token' 
    });
  }
};


module.exports = authMiddleware;
