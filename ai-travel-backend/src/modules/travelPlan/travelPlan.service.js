const Place = require('../place/place.model');
const Hotel = require('../hotel/hotel.model');
const { Op } = require('sequelize');

class TravelPlanService {
  async generatePlan(destination, startDate, endDate, budget) {
    try {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const duration = Math.ceil(Math.abs(end - start) / (1000 * 60 * 60 * 24)) + 1;

      // 1. Fetch places from DB using destination (location field)
      const places = await Place.findAll({
        where: {
          location: { [Op.iLike]: `%${destination}%` }
        }
      });

      // 2. Fetch hotel from DB (Same logic as before)
      const hotel = await Hotel.findOne({
        where: {
          location: { [Op.iLike]: `%${destination}%` }
        }
      });

      const itinerary = [];

      // 4. If no places found, return fallback message in itinerary
      if (places.length === 0) {
        for (let i = 1; i <= duration; i++) {
          itinerary.push({
            day: i,
            place: "Relaxation & Local Exploration",
            description: `We couldn't find specific attractions in ${destination} in our database yet. Enjoy a relaxing day exploring local hidden gems!`,
            location: destination
          });
        }
      } else {
        // 3. If days > places, rotate places
        for (let i = 1; i <= duration; i++) {
          const place = places[(i - 1) % places.length];
          itinerary.push({
            day: i,
            place: place.name,
            description: place.description,
            location: place.location,
            budget: place.budget
          });
        }
      }

      return {
        destination,
        startDate,
        endDate,
        duration,
        budget,
        hotel: hotel ? {
          name: hotel.name,
          pricePerNight: hotel.pricePerNight,
          rating: hotel.rating,
          location: hotel.location
        } : "No hotels found for this destination",
        itinerary
      };
    } catch (error) {
      throw new Error(`Service Error: ${error.message}`);
    }
  }
}

module.exports = new TravelPlanService();
