const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');

const LiveData = sequelize.define('LiveData', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  source: { type: DataTypes.STRING },
  dataType: { type: DataTypes.STRING }, // weather, traffic, etc.
  value: { type: DataTypes.JSONB },
  timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = LiveData;
