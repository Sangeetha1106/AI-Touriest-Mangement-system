const User = require('./user.model');
const { hashPassword, comparePassword } = require('../../shared/utils/hashPassword');
const generateToken = require('../../shared/utils/generateToken');

class UserService {
  async create(userData) {
    userData.password = await hashPassword(userData.password);
    return await User.create(userData);
  }

  async getAll() {
    return await User.findAll({ attributes: { exclude: ['password'] } });
  }

  async getById(id) {
    return await User.findByPk(id, { attributes: { exclude: ['password'] } });
  }

  async update(id, updateData) {
    if (updateData.password) {
      updateData.password = await hashPassword(updateData.password);
    }
    const user = await User.findByPk(id);
    if (!user) throw new Error('User not found');
    return await user.update(updateData);
  }

  async delete(id) {
    const user = await User.findByPk(id);
    if (!user) throw new Error('User not found');
    return await user.destroy();
  }

  async findByEmail(email) {
    return await User.findOne({ where: { email } });
  }
}

module.exports = new UserService();
