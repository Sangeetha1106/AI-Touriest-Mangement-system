const express = require('express');
const notificationController = require('./notification.controller');
const { authenticate: authMiddleware } = require('../../shared/middleware/auth.middleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/create', notificationController.createNotification);
router.get('/user/:userId', notificationController.getUserNotifications);
router.put('/read/:id', notificationController.markAsRead);
router.delete('/:id', notificationController.deleteNotification);

module.exports = router;

