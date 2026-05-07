const express = require('express');
const controller = require('./admin.controller');
const { authenticate: authMiddleware } = require('../../shared/middleware/auth.middleware');
const roleMiddleware = require('../../shared/middleware/role.middleware');
const { SUPER_ADMIN } = require('../../shared/constants/roles');
const router = express.Router();

router.post('/create', controller.createAdmin);

router.use(authMiddleware, roleMiddleware(SUPER_ADMIN));

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
module.exports = router;

