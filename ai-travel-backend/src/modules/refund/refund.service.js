const Refund = require('./refund.model');
class RefundService {
  async create(data) { return await Refund.create(data); }
  async getAll() { return await Refund.findAll(); }
  async getById(id) { return await Refund.findByPk(id); }
  async update(id, data) {
    const item = await Refund.findByPk(id);
    if (!item) throw new Error('Not found');
    return await item.update(data);
  }
  async delete(id) {
    const item = await Refund.findByPk(id);
    if (!item) throw new Error('Not found');
    return await item.destroy();
  }
}
module.exports = new RefundService();
