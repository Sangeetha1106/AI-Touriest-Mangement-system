const express = require('express');
const transportController = require('./transport.controller');
const authMiddleware = require('../../shared/middleware/auth.middleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/create', transportController.createTransport);
router.get('/all', transportController.getAllTransport);
router.get('/:id', transportController.getTransportById);
router.put('/:id', transportController.updateTransport);
router.delete('/:id', transportController.deleteTransport);

module.exports = router;
