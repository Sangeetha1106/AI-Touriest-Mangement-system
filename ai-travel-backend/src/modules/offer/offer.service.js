const Offer = require('./offer.model');

class OfferService {
  async createOffer(data) {
    return await Offer.create(data);
  }

  async getAllOffers() {
    return await Offer.findAll();
  }

  async getOfferById(id) {
    const offer = await Offer.findByPk(id);
    if (!offer) throw new Error('Offer not found');
    return offer;
  }

  async updateOffer(id, data) {
    const offer = await Offer.findByPk(id);
    if (!offer) throw new Error('Offer not found');
    return await offer.update(data);
  }

  async deleteOffer(id) {
    const offer = await Offer.findByPk(id);
    if (!offer) throw new Error('Offer not found');
    return await offer.destroy();
  }
}

module.exports = new OfferService();
