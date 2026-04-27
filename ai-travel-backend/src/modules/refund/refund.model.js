const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');

const Refund = sequelize.define('Refund', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  paymentId: { type: DataTypes.UUID, allowNull: false },
  amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: 'requested' },
  reason: { type: DataTypes.TEXT }
});

module.exports = Refund;
