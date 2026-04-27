const Language = require('./language.model');
class LanguageService {
  async create(data) { return await Language.create(data); }
  async getAll() { return await Language.findAll(); }
  async getById(id) { return await Language.findByPk(id); }
  async update(id, data) {
    const item = await Language.findByPk(id);
    if (!item) throw new Error('Language not found');
    return await item.update(data);
  }
  async delete(id) {
    const item = await Language.findByPk(id);
    if (!item) throw new Error('Language not found');
    return await item.destroy();
  }
}
module.exports = new LanguageService();
