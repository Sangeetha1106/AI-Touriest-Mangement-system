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
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(UNAUTHORIZED).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    return res.status(UNAUTHORIZED).json({ message: 'Not authorized, no token' });
  }
};

module.exports = authMiddleware;
