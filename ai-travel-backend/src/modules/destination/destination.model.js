const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');

const Destination = sequelize.define('Destination', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  country: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
  images: { type: DataTypes.ARRAY(DataTypes.STRING) },
  rating: { type: DataTypes.FLOAT, defaultValue: 0 }
});

module.exports = Destination;
