const express = require('express');
const packageController = require('./package.controller');
const { authenticate: authMiddleware } = require('../../shared/middleware/auth.middleware');
const roleMiddleware = require('../../shared/middleware/role.middleware');
const { ADMIN, SUPER_ADMIN } = require('../../shared/constants/roles');

const router = express.Router();

router.post('/create', authMiddleware, roleMiddleware(ADMIN, SUPER_ADMIN), packageController.createPackage);
router.get('/all', packageController.getAllPackages);
router.get('/:id', packageController.getPackageById);
router.put('/:id', authMiddleware, roleMiddleware(ADMIN, SUPER_ADMIN), packageController.updatePackage);
router.delete('/:id', authMiddleware, roleMiddleware(ADMIN, SUPER_ADMIN), packageController.deletePackage);


module.exports = router;

