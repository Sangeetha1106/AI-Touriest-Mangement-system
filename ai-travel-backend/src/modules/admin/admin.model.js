const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');

const Admin = sequelize.define('Admin', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  userId: { type: DataTypes.UUID, allowNull: false, unique: true },
  permissions: { type: DataTypes.JSONB, defaultValue: {} }
});

module.exports = Admin;
