const { FORBIDDEN } = require('../constants/statusCodes');

const roleMiddleware = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(FORBIDDEN).json({
        message: `Role ${req.user.role} is not allowed to access this resource`
      });
    }
    next();
  };
};

module.exports = roleMiddleware;
