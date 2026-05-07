const express = require('express');
const bookingController = require('./booking.controller');
const { authenticate: authMiddleware } = require('../../shared/middleware/auth.middleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/', bookingController.createBooking);
router.get('/', bookingController.getAllBookings);
router.get('/:id', bookingController.getBookingById);
router.put('/:id', bookingController.updateBookingStatus);
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;

