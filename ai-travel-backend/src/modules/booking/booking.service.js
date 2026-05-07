const Booking = require('./booking.model');
const Hotel = require('../hotel/hotel.model');

class BookingService {
  async createBooking(data) {
    const validTypes = ['hotel', 'transport', 'package'];
    if (!validTypes.includes(data.bookingType)) {
      throw new Error('Invalid booking type');
    }

    // If it's a hotel booking, validate the hotel and calculate price
    if (data.bookingType === 'hotel') {
      // Basic UUID validation to prevent Sequelize crash
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
      if (!uuidRegex.test(data.referenceId)) {
        throw new Error('Invalid Hotel ID format (UUID expected)');
      }

      const hotel = await Hotel.findByPk(data.referenceId);
      if (!hotel) {
        throw new Error('Hotel not found');
      }

      // Calculate totalAmount if not provided
      if (!data.totalAmount) {
        const start = new Date(data.startDate);
        const end = new Date(data.endDate);
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1; // At least 1 day
        
        data.totalAmount = diffDays * hotel.pricePerNight;
      }
    }

    try {
      return await Booking.create(data);
    } catch (error) {
      console.error('Sequelize Booking Creation Error:', error);
      throw new Error(error.message || 'Failed to create booking record');
    }
  }

  async getAllBookings() {
    return await Booking.findAll();
  }

  async getBookingById(id) {
    const booking = await Booking.findByPk(id);
    if (!booking) throw new Error('Booking not found');
    return booking;
  }

  async updateBookingStatus(id, status) {
    const booking = await Booking.findByPk(id);
    if (!booking) throw new Error('Booking not found');
    
    const validStatuses = ['pending', 'confirmed', 'cancelled'];
    if (!validStatuses.includes(status)) {
      throw new Error('Invalid status');
    }

    return await booking.update({ status });
  }

  async deleteBooking(id) {
    const booking = await Booking.findByPk(id);
    if (!booking) throw new Error('Booking not found');
    return await booking.destroy();
  }
}

module.exports = new BookingService();
