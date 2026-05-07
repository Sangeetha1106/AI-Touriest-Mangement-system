const authService = require('./auth.service');
const { OK, CREATED, UNAUTHORIZED, BAD_REQUEST } = require('../../shared/constants/statusCodes');

class AuthController {
  async register(req, res, next) {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res.status(BAD_REQUEST).json({
          message: 'All fields (name, email, password) are required'
        });
      }

      const user = await authService.register(req.body);
      res.status(CREATED).json({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      });
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(BAD_REQUEST).json({ message: 'Email already exists' });
      }
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(BAD_REQUEST).json({ message: 'Email and password are required' });
      }
      const result = await authService.login(email, password);
      if (!result) {
        console.warn(`Login failed for email: ${email}`);
        return res.status(UNAUTHORIZED).json({ message: 'Invalid email or password' });
      }
      res.status(OK).json(result);
    } catch (error) {
      console.error('Login error:', error);
      next(error);
    }
  }
}

module.exports = new AuthController();
