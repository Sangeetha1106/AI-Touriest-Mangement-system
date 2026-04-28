const express = require('express');
const transportController = require('./transport.controller');
const authMiddleware = require('../../shared/middleware/auth.middleware');
const roleMiddleware = require('../../shared/middleware/role.middleware');

const { ADMIN, SUPER_ADMIN } = require('../../shared/constants/roles');

const router = express.Router();

router.use(authMiddleware);

router.get('/all', transportController.getAllTransport);
router.get('/:id', transportController.getTransportById);

// Restricted write operations
router.post('/create', roleMiddleware(ADMIN, SUPER_ADMIN), transportController.createTransport);
router.put('/:id', roleMiddleware(ADMIN, SUPER_ADMIN), transportController.updateTransport);
router.delete('/:id', roleMiddleware(ADMIN, SUPER_ADMIN), transportController.deleteTransport);


module.exports = router;
