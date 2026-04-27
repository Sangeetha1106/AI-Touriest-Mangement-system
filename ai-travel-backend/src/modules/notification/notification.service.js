const Notification = require('./notification.model');

class NotificationService {
  async createNotification(data) {
    return await Notification.create(data);
  }

  async getUserNotifications(userId) {
    return await Notification.findAll({ where: { userId } });
  }

  async markAsRead(id) {
    const notification = await Notification.findByPk(id);
    if (!notification) throw new Error('Notification not found');
    return await notification.update({ isRead: true });
  }

  async deleteNotification(id) {
    const notification = await Notification.findByPk(id);
    if (!notification) throw new Error('Notification not found');
    return await notification.destroy();
  }
}

module.exports = new NotificationService();
