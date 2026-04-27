const LiveData = require('./liveData.model');
class LiveDataService {
  async create(data) { return await LiveData.create(data); }
  async getAll() { return await LiveData.findAll(); }
  async getById(id) { return await LiveData.findByPk(id); }
  async update(id, data) {
    const item = await LiveData.findByPk(id);
    if (!item) throw new Error('Live data record not found');
    return await item.update(data);
  }
  async delete(id) {
    const item = await LiveData.findByPk(id);
    if (!item) throw new Error('Live data record not found');
    return await item.destroy();
  }
}
module.exports = new LiveDataService();
