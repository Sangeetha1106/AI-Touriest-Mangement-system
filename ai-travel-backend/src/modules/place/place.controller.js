const placeService = require('./place.service');
const { OK, CREATED, BAD_REQUEST, NOT_FOUND } = require('../../shared/constants/statusCodes');

class PlaceController {
  async addPlace(req, res) {
    try {
      const place = await placeService.createPlace(req.body);
      res.status(CREATED).json({
        success: true,
        message: 'Place created successfully',
        data: place
      });
    } catch (error) {
      res.status(BAD_REQUEST).json({
        success: false,
        message: error.message
      });
    }
  }

  async getAllPlaces(req, res) {
    try {
      const places = await placeService.getAllPlaces();
      res.status(OK).json({
        success: true,
        data: places
      });
    } catch (error) {
      res.status(BAD_REQUEST).json({
        success: false,
        message: error.message
      });
    }
  }

  async getPlaceById(req, res) {
    try {
      const place = await placeService.getPlaceById(req.params.id);
      res.status(OK).json({
        success: true,
        data: place
      });
    } catch (error) {
      res.status(NOT_FOUND).json({
        success: false,
        message: error.message
      });
    }
  }

  async updatePlace(req, res) {
    try {
      const place = await placeService.updatePlace(req.params.id, req.body);
      res.status(OK).json({
        success: true,
        message: 'Place updated successfully',
        data: place
      });
    } catch (error) {
      res.status(BAD_REQUEST).json({
        success: false,
        message: error.message
      });
    }
  }

  async deletePlace(req, res) {
    try {
      await placeService.deletePlace(req.params.id);
      res.status(OK).json({
        success: true,
        message: 'Place deleted successfully'
      });
    } catch (error) {
      res.status(NOT_FOUND).json({
        success: false,
        message: error.message
      });
    }
  }
}

module.exports = new PlaceController();
