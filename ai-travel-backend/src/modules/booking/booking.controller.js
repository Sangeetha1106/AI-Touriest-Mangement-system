const bookingService = require('./booking.service');
const { OK, CREATED, BAD_REQUEST, NOT_FOUND } = require('../../shared/constants/statusCodes');

class BookingController {
  async createBooking(req, res, next) {
    try {
      const booking = await bookingService.createBooking(req.body);
      res.status(CREATED).json(booking);
    } catch (error) {
      res.status(BAD_REQUEST).json({ message: error.message });
    }
  }

  async getAllBookings(req, res, next) {
    try {
      const bookings = await bookingService.getAllBookings();
      res.status(OK).json(bookings);
    } catch (error) {
      next(error);
    }
  }

  async getBookingById(req, res, next) {
    try {
      const booking = await bookingService.getBookingById(req.params.id);
      res.status(OK).json(booking);
    } catch (error) {
      res.status(NOT_FOUND).json({ message: error.message });
    }
  }

  async updateBookingStatus(req, res, next) {
    try {
      const { status } = req.body;
      const booking = await bookingService.updateBookingStatus(req.params.id, status);
      res.status(OK).json(booking);
    } catch (error) {
      res.status(BAD_REQUEST).json({ message: error.message });
    }
  }

  async deleteBooking(req, res, next) {
    try {
      await bookingService.deleteBooking(req.params.id);
      res.status(OK).json({ message: 'Booking deleted successfully' });
    } catch (error) {
      res.status(NOT_FOUND).json({ message: error.message });
    }
  }
}

module.exports = new BookingController();
