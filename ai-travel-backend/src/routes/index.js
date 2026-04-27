const express = require('express');
const router = express.Router();

// Import routes
const authRoutes = require('../modules/auth/auth.routes');
const userRoutes = require('../modules/user/user.routes');
const personalizationRoutes = require('../modules/personalization/personalization.routes');
const aiRoutes = require('../modules/ai/ai.routes');
const itineraryRoutes = require('../modules/itinerary/itinerary.routes');
const budgetRoutes = require('../modules/budget/budget.routes');
const destinationRoutes = require('../modules/destination/destination.routes');
const hotelRoutes = require('../modules/hotel/hotel.routes');
const transportRoutes = require('../modules/transport/transport.routes');
const ticketRoutes = require('../modules/ticket/ticket.routes');
const packageRoutes = require('../modules/package/package.routes');
const bookingRoutes = require('../modules/booking/booking.routes');
const paymentRoutes = require('../modules/payment/payment.routes');
const refundRoutes = require('../modules/refund/refund.routes');
const reviewRoutes = require('../modules/review/review.routes');
const notificationRoutes = require('../modules/notification/notification.routes');
const offerRoutes = require('../modules/offer/offer.routes');
const vendorRoutes = require('../modules/vendor/vendor.routes');
const adminRoutes = require('../modules/admin/admin.routes');
const mapRoutes = require('../modules/map/map.routes');
const chatbotRoutes = require('../modules/chatbot/chatbot.routes');
const socialRoutes = require('../modules/social/social.routes');
const liveDataRoutes = require('../modules/liveData/liveData.routes');
const languageRoutes = require('../modules/language/language.routes');
const securityRoutes = require('../modules/security/security.routes');

// Define routes
router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/personalization', personalizationRoutes);
router.use('/ai', aiRoutes);
router.use('/itinerary', itineraryRoutes);
router.use('/budget', budgetRoutes);
router.use('/destination', destinationRoutes);
router.use('/hotel', hotelRoutes);
router.use('/transport', transportRoutes);
router.use('/ticket', ticketRoutes);
router.use('/package', packageRoutes);
router.use('/booking', bookingRoutes);
router.use('/payment', paymentRoutes);
router.use('/refund', refundRoutes);
router.use('/review', reviewRoutes);
router.use('/notification', notificationRoutes);
router.use('/offer', offerRoutes);
router.use('/vendor', vendorRoutes);
router.use('/admin', adminRoutes);
router.use('/map', mapRoutes);
router.use('/chatbot', chatbotRoutes);
router.use('/social', socialRoutes);
router.use('/liveData', liveDataRoutes);
router.use('/language', languageRoutes);
router.use('/security', securityRoutes);

module.exports = router;
