const Map = require('./map.model');
class MapService {
  async create(data) { return await Map.create(data); }
  async getAll() { return await Map.findAll(); }
  async getById(id) { return await Map.findByPk(id); }
  async update(id, data) {
    const item = await Map.findByPk(id);
    if (!item) throw new Error('Map record not found');
    return await item.update(data);
  }
  async delete(id) {
    const item = await Map.findByPk(id);
    if (!item) throw new Error('Map record not found');
    return await item.destroy();
  }
}
module.exports = new MapService();
