const hotelService = require('./hotel.service');
const { OK, CREATED, BAD_REQUEST, NOT_FOUND } = require('../../shared/constants/statusCodes');

class HotelController {
  async createHotel(req, res, next) {
    try {
      const hotel = await hotelService.createHotel(req.body);
      res.status(CREATED).json(hotel);
    } catch (error) {
      res.status(BAD_REQUEST).json({ message: error.message });
    }
  }

  async getAllHotels(req, res, next) {
    try {
      const hotels = await hotelService.getAllHotels();
      res.status(OK).json(hotels);
    } catch (error) {
      next(error);
    }
  }

  async getHotelById(req, res, next) {
    try {
      const hotel = await hotelService.getHotelById(req.params.id);
      res.status(OK).json(hotel);
    } catch (error) {
      res.status(NOT_FOUND).json({ message: error.message });
    }
  }

  async updateHotel(req, res, next) {
    try {
      const hotel = await hotelService.updateHotel(req.params.id, req.body);
      res.status(OK).json(hotel);
    } catch (error) {
      res.status(BAD_REQUEST).json({ message: error.message });
    }
  }

  async deleteHotel(req, res, next) {
    try {
      await hotelService.deleteHotel(req.params.id);
      res.status(OK).json({ message: 'Hotel deleted successfully' });
    } catch (error) {
      res.status(NOT_FOUND).json({ message: error.message });
    }
  }
}

module.exports = new HotelController();
