const express = require('express');
const controller = require('./security.controller');
const { authenticate: authMiddleware } = require('../../shared/middleware/auth.middleware');
const roleMiddleware = require('../../shared/middleware/role.middleware');
const { ADMIN } = require('../../shared/constants/roles');
const router = express.Router();
router.use(authMiddleware, roleMiddleware(ADMIN));
router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
module.exports = router;

