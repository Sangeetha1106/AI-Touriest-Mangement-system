const express = require('express');
const userController = require('./user.controller');
const authMiddleware = require('../../shared/middleware/auth.middleware');
const roleMiddleware = require('../../shared/middleware/role.middleware');
const { ADMIN } = require('../../shared/constants/roles');

const router = express.Router();

router.post('/', authMiddleware, roleMiddleware(ADMIN), userController.create);
router.get('/', authMiddleware, roleMiddleware(ADMIN), userController.getAll);
router.get('/:id', authMiddleware, userController.getById);
router.put('/:id', authMiddleware, userController.update);
router.delete('/:id', authMiddleware, roleMiddleware(ADMIN), userController.delete);

module.exports = router;
