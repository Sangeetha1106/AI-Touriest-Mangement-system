const { FORBIDDEN } = require('../constants/statusCodes');

const roleMiddleware = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(FORBIDDEN).json({
        success: false,
        message: `Access denied. Role '${req.user ? req.user.role : 'UNKNOWN'}' is not authorized to access this resource.`
      });
    }
    next();
  };
};


module.exports = roleMiddleware;
