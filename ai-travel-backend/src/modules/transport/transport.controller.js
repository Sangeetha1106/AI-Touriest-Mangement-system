const transportService = require('./transport.service');
const { OK, CREATED, BAD_REQUEST, NOT_FOUND } = require('../../shared/constants/statusCodes');

class TransportController {
  async createTransport(req, res, next) {
    try {
      const transport = await transportService.createTransport(req.body);
      res.status(CREATED).json(transport);
    } catch (error) {
      res.status(BAD_REQUEST).json({ message: error.message });
    }
  }

  async getAllTransport(req, res, next) {
    try {
      const transportList = await transportService.getAllTransport();
      res.status(OK).json(transportList);
    } catch (error) {
      next(error);
    }
  }

  async getTransportById(req, res, next) {
    try {
      const transport = await transportService.getTransportById(req.params.id);
      res.status(OK).json(transport);
    } catch (error) {
      res.status(NOT_FOUND).json({ message: error.message });
    }
  }

  async updateTransport(req, res, next) {
    try {
      const transport = await transportService.updateTransport(req.params.id, req.body);
      res.status(OK).json(transport);
    } catch (error) {
      res.status(BAD_REQUEST).json({ message: error.message });
    }
  }

  async deleteTransport(req, res, next) {
    try {
      await transportService.deleteTransport(req.params.id);
      res.status(OK).json({ message: 'Transport deleted successfully' });
    } catch (error) {
      res.status(NOT_FOUND).json({ message: error.message });
    }
  }
}

module.exports = new TransportController();
