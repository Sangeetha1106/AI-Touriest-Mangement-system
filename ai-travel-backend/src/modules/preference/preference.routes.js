const express = require('express');
const router = express.Router();
const preferenceController = require('./preference.controller');
const { authenticate } = require('../../shared/middleware/auth.middleware');

// All preference routes are protected
router.use(authenticate);

router.post('/', preferenceController.savePreference);
router.get('/', preferenceController.getPreference);

module.exports = router;

