const preferenceService = require('./preference.service');
const { CREATED, OK, BAD_REQUEST } = require('../../shared/constants/statusCodes');

class PreferenceController {
  async savePreference(req, res, next) {
    try {
      const { destination, budget, days, travelType } = req.body;
      
      // Basic validation
      if (!destination || !budget || !days || !travelType) {
        return res.status(BAD_REQUEST).json({
          success: false,
          message: 'Destination, budget, days, and travelType are required'
        });
      }

      const preference = await preferenceService.savePreference(req.user.id, {
        destination,
        budget,
        days,
        travelType
      });

      res.status(CREATED).json({
        success: true,
        message: 'Travel preferences saved successfully',
        data: preference
      });
    } catch (error) {
      next(error);
    }
  }

  async getPreference(req, res, next) {
    try {
      const preference = await preferenceService.getLatestPreference(req.user.id);
      res.status(OK).json({
        success: true,
        data: preference
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PreferenceController();
