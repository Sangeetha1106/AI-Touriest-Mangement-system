const Booking = require('./booking.model');

class BookingService {
  async createBooking(data) {
    const validTypes = ['hotel', 'transport', 'package'];
    if (!validTypes.includes(data.bookingType)) {
      throw new Error('Invalid booking type');
    }

    // Basic static logic for totalAmount calculation if not provided
    if (!data.totalAmount) {
      data.totalAmount = 100.00; // Default or calculated base price
    }

    return await Booking.create(data);
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
