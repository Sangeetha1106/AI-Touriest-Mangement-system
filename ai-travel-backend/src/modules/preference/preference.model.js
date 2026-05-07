const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');

const Preference = sequelize.define('Preference', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: false
  },
  budget: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  days: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  travelType: {
    type: DataTypes.ENUM('friends', 'family', 'couple'),
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = Preference;
