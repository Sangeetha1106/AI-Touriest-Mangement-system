const reviewService = require('./review.service');
const { OK, CREATED, NOT_FOUND, INTERNAL_SERVER_ERROR } = require('../../shared/constants/statusCodes');

class ReviewController {
  async create(req, res, next) {
    try {
      const review = await reviewService.create(req.body);
      res.status(CREATED).json(review);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const reviews = await reviewService.getAll();
      res.status(OK).json(reviews);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const review = await reviewService.getById(req.params.id);
      if (!review) return res.status(NOT_FOUND).json({ message: 'Review not found' });
      res.status(OK).json(review);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const review = await reviewService.update(req.params.id, req.body);
      if (!review) return res.status(NOT_FOUND).json({ message: 'Review not found' });
      res.status(OK).json(review);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const success = await reviewService.delete(req.params.id);
      if (!success) return res.status(NOT_FOUND).json({ message: 'Review not found' });
      res.status(OK).json({ message: 'Review deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ReviewController();
