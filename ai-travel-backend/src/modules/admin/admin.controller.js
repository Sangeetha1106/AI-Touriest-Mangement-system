const service = require('./admin.service');
const { OK, CREATED, NOT_FOUND } = require('../../shared/constants/statusCodes');
class AdminController {
  async createAdmin(req, res, next) {
    try {
      const data = await service.create(req.body);
      res.status(CREATED).json(data);
    } catch (e) {
      next(e);
    }
  }

  async getAll(req, res, next) {
    try {
      const data = await service.getAll();
      res.status(OK).json(data);
    } catch (e) {
      next(e);
    }
  }

  async getById(req, res, next) {
    try {
      const item = await service.getById(req.params.id);
      if (!item) return res.status(NOT_FOUND).json({ message: 'Admin not found' });
      res.status(OK).json(item);
    } catch (e) {
      next(e);
    }
  }

  async update(req, res, next) {
    try {
      const data = await service.update(req.params.id, req.body);
      res.status(OK).json(data);
    } catch (e) {
      next(e);
    }
  }

  async delete(req, res, next) {
    try {
      await service.delete(req.params.id);
      res.status(OK).json({ message: 'Admin deleted' });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new AdminController();
