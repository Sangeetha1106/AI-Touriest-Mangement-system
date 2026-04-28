const express = require('express');
const hotelController = require('./hotel.controller');
const authMiddleware = require('../../shared/middleware/auth.middleware');
const roleMiddleware = require('../../shared/middleware/role.middleware');

const { ADMIN, SUPER_ADMIN } = require('../../shared/constants/roles');

const router = express.Router();

router.use(authMiddleware);

router.get('/all', hotelController.getAllHotels);
router.get('/:id', hotelController.getHotelById);

// Restricted write operations
router.post('/create', roleMiddleware(ADMIN, SUPER_ADMIN), hotelController.createHotel);
router.put('/:id', roleMiddleware(ADMIN, SUPER_ADMIN), hotelController.updateHotel);
router.delete('/:id', roleMiddleware(ADMIN, SUPER_ADMIN), hotelController.deleteHotel);


module.exports = router;
