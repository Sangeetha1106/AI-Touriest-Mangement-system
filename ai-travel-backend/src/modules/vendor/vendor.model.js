const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');

const Vendor = sequelize.define('Vendor', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true },
  category: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING, defaultValue: 'active' }
});

module.exports = Vendor;
