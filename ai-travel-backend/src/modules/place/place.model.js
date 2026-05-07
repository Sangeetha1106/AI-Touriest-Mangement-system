const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');

const Place = sequelize.define('Place', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  budget: {
    type: DataTypes.INTEGER
  },
  daysRequired: {
    type: DataTypes.INTEGER
  }
}, {
  timestamps: true
});

module.exports = Place;
