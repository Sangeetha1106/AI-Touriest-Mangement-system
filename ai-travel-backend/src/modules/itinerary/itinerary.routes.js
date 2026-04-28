const express = require('express');
const controller = require('./itinerary.controller');
const authMiddleware = require('../../shared/middleware/auth.middleware');
const roleMiddleware = require('../../shared/middleware/role.middleware');
const { USER, ADMIN, SUPER_ADMIN } = require('../../shared/constants/roles');

const router = express.Router();

router.use(authMiddleware, roleMiddleware(USER, ADMIN, SUPER_ADMIN));

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);


module.exports = router;
