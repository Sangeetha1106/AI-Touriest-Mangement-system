const express = require('express');
const controller = require('./destination.controller');
const { authenticate: authMiddleware } = require('../../shared/middleware/auth.middleware');
const roleMiddleware = require('../../shared/middleware/role.middleware');

const { ADMIN, SUPER_ADMIN } = require('../../shared/constants/roles');

const router = express.Router();

router.use(authMiddleware);

router.get('/', controller.getAll);
router.get('/:id', controller.getById);

// Restricted write operations
router.post('/', roleMiddleware(ADMIN, SUPER_ADMIN), controller.create);
router.put('/:id', roleMiddleware(ADMIN, SUPER_ADMIN), controller.update);
router.delete('/:id', roleMiddleware(ADMIN, SUPER_ADMIN), controller.delete);


module.exports = router;

