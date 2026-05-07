const Admin = require('./admin.model');
const User = require('../user/user.model');
const { sequelize } = require('../../config/db');
const { hashPassword } = require('../../shared/utils/hashPassword');

class AdminService {
  async create(data) {
    const transaction = await sequelize.transaction();
    try {
      // Hash password before creating user
      const hashedPassword = await hashPassword(data.password);

      // 1. Create the User record first
      const user = await User.create({
        name: data.name,
        email: data.email,
        password: hashedPassword,
        role: 'ADMIN'
      }, { transaction });

      // 2. Create the Admin record linked to the User
      const admin = await Admin.create({
        userId: user.id,
        permissions: data.permissions || {}
      }, { transaction });

      await transaction.commit();

      // Return combined data
      return {
        id: admin.id,
        userId: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        permissions: admin.permissions
      };
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
  async getAll() { return await Admin.findAll(); }
  async getById(id) { return await Admin.findByPk(id); }
  async update(id, data) {
    const item = await Admin.findByPk(id);
    if (!item) throw new Error('Admin not found');
    return await item.update(data);
  }
  async delete(id) {
    const item = await Admin.findByPk(id);
    if (!item) throw new Error('Admin not found');
    return await item.destroy();
  }
}
module.exports = new AdminService();
