const Admin = require('./admin.model');
class AdminService {
  async create(data) { return await Admin.create(data); }
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
