const userService = require('../user/user.service');
const { comparePassword } = require('../../shared/utils/hashPassword');
const generateToken = require('../../shared/utils/generateToken');
const { UNAUTHORIZED } = require('../../shared/constants/statusCodes');

class AuthService {
  async register(userData) {
    return await userService.create(userData);
  }

  async login(email, password) {
    const user = await userService.findByEmail(email);
    if (user && (await comparePassword(password, user.password))) {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user.id, user.role)
      };
    }
    return null;
  }
}

module.exports = new AuthService();
