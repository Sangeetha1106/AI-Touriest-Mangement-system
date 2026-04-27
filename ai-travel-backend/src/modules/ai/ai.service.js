const AI = require('./ai.model');

class AIService {
  async create(data) { return await AI.create(data); }
  async getAll() { return await AI.findAll(); }
  async getById(id) { return await AI.findByPk(id); }
  async update(id, data) {
    const item = await AI.findByPk(id);
    if (!item) throw new Error('Not found');
    return await item.update(data);
  }
  async delete(id) {
    const item = await AI.findByPk(id);
    if (!item) throw new Error('Not found');
    return await item.destroy();
  }
}

module.exports = new AIService();
