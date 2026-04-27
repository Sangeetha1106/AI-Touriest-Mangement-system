const Itinerary = require('./itinerary.model');

class ItineraryService {
  async create(data) { return await Itinerary.create(data); }
  async getAll() { return await Itinerary.findAll(); }
  async getById(id) { return await Itinerary.findByPk(id); }
  async update(id, data) {
    const item = await Itinerary.findByPk(id);
    if (!item) throw new Error('Not found');
    return await item.update(data);
  }
  async delete(id) {
    const item = await Itinerary.findByPk(id);
    if (!item) throw new Error('Not found');
    return await item.destroy();
  }
}

module.exports = new ItineraryService();
