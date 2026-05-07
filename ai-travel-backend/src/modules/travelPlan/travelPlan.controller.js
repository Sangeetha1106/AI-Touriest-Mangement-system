const travelPlanService = require('./travelPlan.service');

class TravelPlanController {
  async createPlan(req, res) {
    try {
      const { destination, startDate, endDate, budget } = req.body;

      // Validation
      if (!destination || !startDate || !endDate) {
        return res.status(400).json({
          success: false,
          message: "Required fields: destination, startDate, endDate"
        });
      }

      // Logic call
      const planData = await travelPlanService.generatePlan(destination, startDate, endDate, budget);

      // Successful Response
      return res.status(200).json({
        success: true,
        message: "Itinerary generated successfully",
        data: planData
      });

    } catch (error) {
      console.error("TravelPlan Error:", error.message);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error.message
      });
    }
  }
}

module.exports = new TravelPlanController();
