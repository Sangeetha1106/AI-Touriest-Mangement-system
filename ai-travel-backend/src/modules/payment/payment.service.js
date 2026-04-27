const Payment = require('./payment.model');
class PaymentService {
  async create(data) { return await Payment.create(data); }
  async getAll() { return await Payment.findAll(); }
  async getById(id) { return await Payment.findByPk(id); }
  async update(id, data) {
    const item = await Payment.findByPk(id);
    if (!item) throw new Error('Not found');
    return await item.update(data);
  }
  async delete(id) {
    const item = await Payment.findByPk(id);
    if (!item) throw new Error('Not found');
    return await item.destroy();
  }
}
module.exports = new PaymentService();
