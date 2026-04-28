const Review = require('./review.model');

class ReviewService {
  async create(data) {
    return await Review.create(data);
  }

  async getAll() {
    return await Review.findAll();
  }

  async getById(id) {
    return await Review.findByPk(id);
  }

  async update(id, data) {
    const review = await Review.findByPk(id);
    if (!review) return null;
    return await review.update(data);
  }

  async delete(id) {
    const review = await Review.findByPk(id);
    if (!review) return null;
    await review.destroy();
    return true;
  }
}

module.exports = new ReviewService();
