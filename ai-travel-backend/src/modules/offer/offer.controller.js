const offerService = require('./offer.service');
const { OK, CREATED, BAD_REQUEST, NOT_FOUND } = require('../../shared/constants/statusCodes');

class OfferController {
  async createOffer(req, res, next) {
    try {
      const offer = await offerService.createOffer(req.body);
      res.status(CREATED).json(offer);
    } catch (error) {
      res.status(BAD_REQUEST).json({ message: error.message });
    }
  }

  async getAllOffers(req, res, next) {
    try {
      const offers = await offerService.getAllOffers();
      res.status(OK).json(offers);
    } catch (error) {
      next(error);
    }
  }

  async getOfferById(req, res, next) {
    try {
      const offer = await offerService.getOfferById(req.params.id);
      res.status(OK).json(offer);
    } catch (error) {
      res.status(NOT_FOUND).json({ message: error.message });
    }
  }

  async updateOffer(req, res, next) {
    try {
      const offer = await offerService.updateOffer(req.params.id, req.body);
      res.status(OK).json(offer);
    } catch (error) {
      res.status(BAD_REQUEST).json({ message: error.message });
    }
  }

  async deleteOffer(req, res, next) {
    try {
      await offerService.deleteOffer(req.params.id);
      res.status(OK).json({ message: 'Offer deleted successfully' });
    } catch (error) {
      res.status(NOT_FOUND).json({ message: error.message });
    }
  }
}

module.exports = new OfferController();
