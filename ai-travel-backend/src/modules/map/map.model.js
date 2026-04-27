const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');

const Map = sequelize.define('Map', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  locationName: { type: DataTypes.STRING },
  latitude: { type: DataTypes.DECIMAL(10, 8) },
  longitude: { type: DataTypes.DECIMAL(11, 8) },
  type: { type: DataTypes.STRING }
});

module.exports = Map;
