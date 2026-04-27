const notificationService = require('./notification.service');
const { OK, CREATED, BAD_REQUEST, NOT_FOUND } = require('../../shared/constants/statusCodes');

class NotificationController {
  async createNotification(req, res, next) {
    try {
      const notification = await notificationService.createNotification(req.body);
      res.status(CREATED).json(notification);
    } catch (error) {
      res.status(BAD_REQUEST).json({ message: error.message });
    }
  }

  async getUserNotifications(req, res, next) {
    try {
      const notifications = await notificationService.getUserNotifications(req.params.userId);
      res.status(OK).json(notifications);
    } catch (error) {
      next(error);
    }
  }

  async markAsRead(req, res, next) {
    try {
      const notification = await notificationService.markAsRead(req.params.id);
      res.status(OK).json(notification);
    } catch (error) {
      res.status(NOT_FOUND).json({ message: error.message });
    }
  }

  async deleteNotification(req, res, next) {
    try {
      await notificationService.deleteNotification(req.params.id);
      res.status(OK).json({ message: 'Notification deleted' });
    } catch (error) {
      res.status(NOT_FOUND).json({ message: error.message });
    }
  }
}

module.exports = new NotificationController();
