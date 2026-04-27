const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');

const Itinerary = sequelize.define('Itinerary', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  userId: { type: DataTypes.UUID },
  title: { type: DataTypes.STRING },
  startDate: { type: DataTypes.DATE },
  endDate: { type: DataTypes.DATE },
  activities: { type: DataTypes.JSONB }
});

module.exports = Itinerary;
