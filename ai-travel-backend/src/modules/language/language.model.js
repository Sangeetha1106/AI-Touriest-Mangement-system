const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');

const Language = sequelize.define('Language', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  code: { type: DataTypes.STRING, unique: true },
  name: { type: DataTypes.STRING },
  isDefault: { type: DataTypes.BOOLEAN, defaultValue: false }
});

module.exports = Language;
