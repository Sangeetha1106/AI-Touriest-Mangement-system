const Transport = require('./transport.model');

class TransportService {
  async createTransport(data) {
    return await Transport.create(data);
  }

  async getAllTransport() {
    return await Transport.findAll();
  }

  async getTransportById(id) {
    const transport = await Transport.findByPk(id);
    if (!transport) throw new Error('Transport not found');
    return transport;
  }

  async updateTransport(id, data) {
    const transport = await Transport.findByPk(id);
    if (!transport) throw new Error('Transport not found');
    return await transport.update(data);
  }

  async deleteTransport(id) {
    const transport = await Transport.findByPk(id);
    if (!transport) throw new Error('Transport not found');
    return await transport.destroy();
  }
}

module.exports = new TransportService();
