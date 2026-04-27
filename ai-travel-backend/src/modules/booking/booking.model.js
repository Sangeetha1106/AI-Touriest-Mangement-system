const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  bookingType: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['hotel', 'transport', 'package']]
    }
  },
  referenceId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  totalAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
    validate: {
      isIn: [['pending', 'confirmed', 'cancelled']]
    }
  }
}, {
  timestamps: true
});

module.exports = Booking;
