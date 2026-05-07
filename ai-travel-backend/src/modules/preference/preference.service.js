const Preference = require('./preference.model');

class PreferenceService {
  async savePreference(userId, data) {
    // Check if preference already exists for this user (optional: depending on if we want multiple plans)
    // For now, let's allow multiple entries or update the existing one.
    // The user requirement says "Travel Input", implying a one-time setup for a plan.
    return await Preference.create({
      userId,
      ...data
    });
  }

  async getLatestPreference(userId) {
    return await Preference.findOne({
      where: { userId },
      order: [['createdAt', 'DESC']]
    });
  }
}

module.exports = new PreferenceService();
