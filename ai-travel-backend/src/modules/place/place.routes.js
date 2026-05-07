const express = require('express');
const router = express.Router();
const placeController = require('./place.controller');

// Define routes for Places
router.post('/', placeController.addPlace);
router.get('/', placeController.getAllPlaces);
router.get('/:id', placeController.getPlaceById);
router.put('/:id', placeController.updatePlace);
router.delete('/:id', placeController.deletePlace);

module.exports = router;
