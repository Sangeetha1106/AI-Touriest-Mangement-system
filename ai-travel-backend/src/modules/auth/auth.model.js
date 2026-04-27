// Auth module typically uses User model, but creating a placeholder as requested
const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');

const Auth = sequelize.define('Auth', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  lastLogin: { type: DataTypes.DATE },
  userId: { type: DataTypes.UUID }
});

module.exports = Auth;
