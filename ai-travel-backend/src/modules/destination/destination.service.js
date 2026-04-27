const Destination = require('./destination.model');

class DestinationService {
  async create(data) { return await Destination.create(data); }
  async getAll() { return await Destination.findAll(); }
  async getById(id) { return await Destination.findByPk(id); }
  async update(id, data) {
    const item = await Destination.findByPk(id);
    if (!item) throw new Error('Not found');
    return await item.update(data);
  }
  async delete(id) {
    const item = await Destination.findByPk(id);
    if (!item) throw new Error('Not found');
    return await item.destroy();
  }
}

module.exports = new DestinationService();
