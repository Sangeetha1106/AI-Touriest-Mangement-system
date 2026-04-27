const authService = require('./auth.service');
const { OK, CREATED, UNAUTHORIZED } = require('../../shared/constants/statusCodes');

class AuthController {
  async register(req, res, next) {
    try {
      const user = await authService.register(req.body);
      res.status(CREATED).json(user);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const result = await authService.login(email, password);
      if (!result) {
        return res.status(UNAUTHORIZED).json({ message: 'Invalid email or password' });
      }
      res.status(OK).json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
