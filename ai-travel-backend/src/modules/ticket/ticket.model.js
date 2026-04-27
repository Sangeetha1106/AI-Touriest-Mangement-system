const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');

const Ticket = sequelize.define('Ticket', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  transportId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fromLocation: {
    type: DataTypes.STRING,
    allowNull: false
  },
  toLocation: {
    type: DataTypes.STRING,
    allowNull: false
  },
  travelDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('booked', 'cancelled', 'pending'),
    defaultValue: 'pending'
  }
}, {
  timestamps: true
});

module.exports = Ticket;
