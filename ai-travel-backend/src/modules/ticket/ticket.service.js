const Ticket = require('./ticket.model');

class TicketService {
  async bookTicket(data) {
    return await Ticket.create(data);
  }

  async getAllTickets() {
    return await Ticket.findAll();
  }

  async getTicketById(id) {
    const ticket = await Ticket.findByPk(id);
    if (!ticket) throw new Error('Ticket not found');
    return ticket;
  }

  async updateTicketStatus(id, status) {
    const ticket = await Ticket.findByPk(id);
    if (!ticket) throw new Error('Ticket not found');
    return await ticket.update({ status });
  }

  async cancelTicket(id) {
    const ticket = await Ticket.findByPk(id);
    if (!ticket) throw new Error('Ticket not found');
    return await ticket.update({ status: 'cancelled' });
  }
}

module.exports = new TicketService();
