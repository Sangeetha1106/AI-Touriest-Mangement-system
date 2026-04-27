const Security = require('./security.model');
class SecurityService {
  async create(data) { return await Security.create(data); }
  async getAll() { return await Security.findAll(); }
  async getById(id) { return await Security.findByPk(id); }
  async update(id, data) {
    const item = await Security.findByPk(id);
    if (!item) throw new Error('Security record not found');
    return await item.update(data);
  }
  async delete(id) {
    const item = await Security.findByPk(id);
    if (!item) throw new Error('Security record not found');
    return await item.destroy();
  }
}
module.exports = new SecurityService();
