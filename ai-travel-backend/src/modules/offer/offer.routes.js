const express = require('express');
const offerController = require('./offer.controller');
const { authenticate: authMiddleware } = require('../../shared/middleware/auth.middleware');

const router = express.Router();

router.post('/create', authMiddleware, offerController.createOffer);
router.get('/all', offerController.getAllOffers);
router.get('/:id', offerController.getOfferById);
router.put('/:id', authMiddleware, offerController.updateOffer);
router.delete('/:id', authMiddleware, offerController.deleteOffer);

module.exports = router;

