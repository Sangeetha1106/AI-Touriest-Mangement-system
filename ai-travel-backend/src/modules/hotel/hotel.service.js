const Hotel = require('./hotel.model');

class HotelService {
  async createHotel(data) {
    return await Hotel.create(data);
  }

  async getAllHotels() {
    return await Hotel.findAll();
  }

  async getHotelById(id) {
    const hotel = await Hotel.findByPk(id);
    if (!hotel) throw new Error('Hotel not found');
    return hotel;
  }

  async updateHotel(id, data) {
    const hotel = await Hotel.findByPk(id);
    if (!hotel) throw new Error('Hotel not found');
    return await hotel.update(data);
  }

  async deleteHotel(id) {
    const hotel = await Hotel.findByPk(id);
    if (!hotel) throw new Error('Hotel not found');
    return await hotel.destroy();
  }
}

module.exports = new HotelService();
