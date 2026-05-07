const Place = require('./place.model');

class PlaceService {
  async createPlace(data) {
    return await Place.create(data);
  }

  async getAllPlaces() {
    return await Place.findAll();
  }

  async getPlaceById(id) {
    const place = await Place.findByPk(id);
    if (!place) throw new Error('Place not found');
    return place;
  }

  async updatePlace(id, data) {
    const place = await Place.findByPk(id);
    if (!place) throw new Error('Place not found');
    return await place.update(data);
  }

  async deletePlace(id) {
    const place = await Place.findByPk(id);
    if (!place) throw new Error('Place not found');
    return await place.destroy();
  }
}

module.exports = new PlaceService();
