const Chatbot = require('./chatbot.model');
class ChatbotService {
  async create(data) { return await Chatbot.create(data); }
  async getAll() { return await Chatbot.findAll(); }
  async getById(id) { return await Chatbot.findByPk(id); }
  async update(id, data) {
    const item = await Chatbot.findByPk(id);
    if (!item) throw new Error('Chat record not found');
    return await item.update(data);
  }
  async delete(id) {
    const item = await Chatbot.findByPk(id);
    if (!item) throw new Error('Chat record not found');
    return await item.destroy();
  }
}
module.exports = new ChatbotService();
