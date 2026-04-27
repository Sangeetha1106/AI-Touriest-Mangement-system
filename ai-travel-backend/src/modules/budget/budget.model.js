const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');

const Budget = sequelize.define('Budget', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  userId: { type: DataTypes.UUID },
  totalBudget: { type: DataTypes.DECIMAL(10, 2) },
  spent: { type: DataTypes.DECIMAL(10, 2), defaultValue: 0 },
  currency: { type: DataTypes.STRING, defaultValue: 'USD' }
});

module.exports = Budget;
