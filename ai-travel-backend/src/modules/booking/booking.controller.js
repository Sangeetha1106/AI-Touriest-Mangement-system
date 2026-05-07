const bookingService = require('./booking.service');
const { OK, CREATED, BAD_REQUEST, NOT_FOUND } = require('../../shared/constants/statusCodes');

class BookingController {
  async createBooking(req, res, next) {
    try {
      console.log('Incoming Booking Request:', req.body);

      const { hotelId, checkIn, checkOut, totalAmount, bookingType = 'hotel' } = req.body;
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

      // 1. Safety check for req.user (prevent TypeError)
      if (!req.user || !req.user.id) {
        return res.status(BAD_REQUEST).json({
          success: false,
          message: 'User authentication failed. Please login again.'
        });
      }

      // 2. Validate input presence
      if (!hotelId || !checkIn || !checkOut) {
        return res.status(BAD_REQUEST).json({
          success: false,
          message: 'Missing required fields: hotelId, checkIn, or checkOut'
        });
      }

      if (!uuidRegex.test(hotelId)) {
        return res.status(BAD_REQUEST).json({
          success: false,
          message: 'hotelId must be a valid UUID string'
        });
      }

      // 3. Simple date validation
      const start = new Date(checkIn);
      const end = new Date(checkOut);

      if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        return res.status(BAD_REQUEST).json({
          success: false,
          message: 'Invalid date format provided for checkIn or checkOut'
        });
      }

      if (start >= end) {
        return res.status(BAD_REQUEST).json({
          success: false,
          message: 'Check-out date must be after check-in date'
        });
      }

      // 4. Map to database model fields
      const bookingData = {
        userId: req.user.id,
        bookingType: bookingType,
        referenceId: hotelId,
        startDate: checkIn,
        endDate: checkOut,
        totalAmount: totalAmount
      };

      const booking = await bookingService.createBooking(bookingData);

      res.status(CREATED).json({
        success: true,
        message: 'Booking created successfully',
        data: booking
      });

    } catch (error) {
      console.error('Booking Controller Error:', error);
      res.status(BAD_REQUEST).json({
        success: false,
        message: error.message || 'An unexpected error occurred while creating booking'
      });
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
