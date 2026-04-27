const express = require('express');
const cors = require('cors');
const { connectDB, sequelize } = require('./config/db');
require('dotenv').config();
// Import Routes
const authRoutes = require('./modules/auth/auth.routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.get("/test", (req, res) => {
  res.send("Test route working 🚀");
});

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("AI Travel Backend Running 🚀");
});

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

// Connect to Database and Sync
const startServer = async () => {
  try {
    await connectDB();

    // Auto-create/update tables
    await sequelize.sync({ alter: true });
    console.log('Database tables synced successfully');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Server failed to start:', error);
  }
};

startServer();
