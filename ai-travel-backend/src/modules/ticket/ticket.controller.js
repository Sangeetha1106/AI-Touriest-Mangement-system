const ticketService = require('./ticket.service');
const { OK, CREATED, BAD_REQUEST, NOT_FOUND } = require('../../shared/constants/statusCodes');

class TicketController {
  async bookTicket(req, res, next) {
    try {
      const ticket = await ticketService.bookTicket(req.body);
      res.status(CREATED).json(ticket);
    } catch (error) {
      res.status(BAD_REQUEST).json({ message: error.message });
    }
  }

  async getAllTickets(req, res, next) {
    try {
      const tickets = await ticketService.getAllTickets();
      res.status(OK).json(tickets);
    } catch (error) {
      next(error);
    }
  }

  async getTicketById(req, res, next) {
    try {
      const ticket = await ticketService.getTicketById(req.params.id);
      res.status(OK).json(ticket);
    } catch (error) {
      res.status(NOT_FOUND).json({ message: error.message });
    }
  }

  async updateTicketStatus(req, res, next) {
    try {
      const { status } = req.body;
      const ticket = await ticketService.updateTicketStatus(req.params.id, status);
      res.status(OK).json(ticket);
    } catch (error) {
      res.status(BAD_REQUEST).json({ message: error.message });
    }
  }

  async cancelTicket(req, res, next) {
    try {
      await ticketService.cancelTicket(req.params.id);
      res.status(OK).json({ message: 'Ticket cancelled successfully' });
    } catch (error) {
      res.status(NOT_FOUND).json({ message: error.message });
    }
  }
}

module.exports = new TicketController();
