const app = require('./app');


const { connectDB, sequelize } = require('./config/db');
const setupAssociations = require('./shared/models/associations');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Import all models to ensure they are registered with Sequelize
require('./modules/auth/auth.model');

require('./modules/user/user.model');
require('./modules/personalization/personalization.model');
require('./modules/ai/ai.model');
require('./modules/itinerary/itinerary.model');
require('./modules/budget/budget.model');
require('./modules/destination/destination.model');
require('./modules/hotel/hotel.model');
require('./modules/transport/transport.model');
require('./modules/ticket/ticket.model');
require('./modules/package/package.model');
require('./modules/booking/booking.model');
require('./modules/payment/payment.model');
require('./modules/refund/refund.model');
require('./modules/review/review.model');
require('./modules/notification/notification.model');
require('./modules/offer/offer.model');
require('./modules/vendor/vendor.model');
require('./modules/admin/admin.model');
require('./modules/map/map.model');
require('./modules/chatbot/chatbot.model');
require('./modules/social/social.model');
require('./modules/liveData/liveData.model');
require('./modules/language/language.model');
require('./modules/security/security.model');
require('./modules/place/place.model');
require('./modules/preference/preference.model');




// Connect to Database and Sync
const startServer = async () => {
  try {
    await connectDB();

    // Setup Associations
    setupAssociations();

    // Auto-create/update tables
    await sequelize.sync({ alter: true });
    console.log('Database synced successfully');

    const server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Please stop the existing server or set a different PORT.`);
      } else {
        console.error('Server failed to start:', error);
      }
      process.exit(1);
    });
  } catch (error) {
    console.error('Server failed to start:', error);
    process.exit(1);
  }
};

startServer();
