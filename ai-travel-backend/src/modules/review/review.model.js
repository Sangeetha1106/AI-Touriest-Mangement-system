const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');

const Review = sequelize.define('Review', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  userId: { type: DataTypes.UUID, allowNull: false },
  targetId: { type: DataTypes.UUID, allowNull: false }, // Could be hotel, package, etc.
  rating: { type: DataTypes.INTEGER, allowNull: false },
  comment: { type: DataTypes.TEXT }
});

module.exports = Review;
