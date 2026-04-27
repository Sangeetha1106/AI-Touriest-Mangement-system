const express = require('express');
const packageController = require('./package.controller');
const authMiddleware = require('../../shared/middleware/auth.middleware');

const router = express.Router();

router.post('/create', authMiddleware, packageController.createPackage);
router.get('/all', packageController.getAllPackages);
router.get('/:id', packageController.getPackageById);
router.put('/:id', authMiddleware, packageController.updatePackage);
router.delete('/:id', authMiddleware, packageController.deletePackage);

module.exports = router;
