const Budget = require('./budget.model');

class BudgetService {
  async create(data) { return await Budget.create(data); }
  async getAll() { return await Budget.findAll(); }
  async getById(id) { return await Budget.findByPk(id); }
  async update(id, data) {
    const item = await Budget.findByPk(id);
    if (!item) throw new Error('Not found');
    return await item.update(data);
  }
  async delete(id) {
    const item = await Budget.findByPk(id);
    if (!item) throw new Error('Not found');
    return await item.destroy();
  }
}

module.exports = new BudgetService();
