const express = require('express');
const userController = require('./user.controller');
const { authenticate, authorize } = require('../../shared/middleware/auth.middleware');
const { ADMIN } = require('../../shared/constants/roles');

const router = express.Router();

router.get('/', authenticate, authorize(ADMIN), userController.getAll);
router.get('/:id', authenticate, userController.getById);
router.put('/:id', authenticate, userController.update);
router.delete('/:id', authenticate, authorize(ADMIN), userController.delete);

module.exports = router;

