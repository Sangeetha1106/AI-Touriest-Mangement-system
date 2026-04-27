const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');

const Security = sequelize.define('Security', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  userId: { type: DataTypes.UUID },
  action: { type: DataTypes.STRING }, // login, password_change, etc.
  ipAddress: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING }
});

module.exports = Security;
