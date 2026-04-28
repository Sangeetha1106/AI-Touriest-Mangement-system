const userService = require('./user.service');
const { OK, CREATED, NOT_FOUND } = require('../../shared/constants/statusCodes');

class UserController {
  async create(req, res, next) {
    try {
      const user = await userService.create(req.body);
      res.status(CREATED).json(user);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const users = await userService.getAll();
      res.status(OK).json(users);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const user = await userService.getById(req.params.id);
      if (!user) return res.status(NOT_FOUND).json({ message: 'User not found' });
      res.status(OK).json(user);
    } catch (error) {
      next(error);
    }
  }

  async getProfile(req, res, next) {
    try {
      const user = await userService.getById(req.user.id);
      if (!user) return res.status(NOT_FOUND).json({ message: 'User not found' });
      res.status(OK).json(user);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const user = await userService.update(req.params.id, req.body);
      res.status(OK).json(user);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await userService.delete(req.params.id);
      res.status(OK).json({ message: 'User deleted' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
