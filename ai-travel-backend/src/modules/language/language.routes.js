const express = require('express');
const controller = require('./language.controller');
const { authenticate: authMiddleware } = require('../../shared/middleware/auth.middleware');
const roleMiddleware = require('../../shared/middleware/role.middleware');
const { ADMIN } = require('../../shared/constants/roles');
const router = express.Router();
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', authMiddleware, roleMiddleware(ADMIN), controller.create);
router.put('/:id', authMiddleware, roleMiddleware(ADMIN), controller.update);
router.delete('/:id', authMiddleware, roleMiddleware(ADMIN), controller.delete);
module.exports = router;

