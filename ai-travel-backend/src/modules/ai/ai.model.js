const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');

const AI = sequelize.define('AI', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  userId: { type: DataTypes.UUID },
  prompt: { type: DataTypes.TEXT },
  response: { type: DataTypes.TEXT },
  metadata: { type: DataTypes.JSONB }
});

module.exports = AI;
