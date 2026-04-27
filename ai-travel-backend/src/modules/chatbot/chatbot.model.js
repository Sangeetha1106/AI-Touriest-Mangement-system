const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');

const Chatbot = sequelize.define('Chatbot', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  userId: { type: DataTypes.UUID },
  message: { type: DataTypes.TEXT },
  intent: { type: DataTypes.STRING },
  context: { type: DataTypes.JSONB }
});

module.exports = Chatbot;
