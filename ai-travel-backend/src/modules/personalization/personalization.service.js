const Personalization = require('./personalization.model');

class PersonalizationService {
  async create(data) { return await Personalization.create(data); }
  async getAll() { return await Personalization.findAll(); }
  async getById(id) { return await Personalization.findByPk(id); }
  async update(id, data) {
    const item = await Personalization.findByPk(id);
    if (!item) throw new Error('Not found');
    return await item.update(data);
  }
  async delete(id) {
    const item = await Personalization.findByPk(id);
    if (!item) throw new Error('Not found');
    return await item.destroy();
  }
}

module.exports = new PersonalizationService();
