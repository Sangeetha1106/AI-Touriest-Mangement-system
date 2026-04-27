const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');

const Personalization = sequelize.define('Personalization', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  userId: { type: DataTypes.UUID, allowNull: false },
  preferences: { type: DataTypes.JSONB, defaultValue: {} },
  interests: { type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: [] }
});

module.exports = Personalization;
