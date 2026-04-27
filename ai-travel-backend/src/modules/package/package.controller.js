const packageService = require('./package.service');
const { OK, CREATED, BAD_REQUEST, NOT_FOUND } = require('../../shared/constants/statusCodes');

class PackageController {
  async createPackage(req, res, next) {
    try {
      const travelPackage = await packageService.createPackage(req.body);
      res.status(CREATED).json(travelPackage);
    } catch (error) {
      res.status(BAD_REQUEST).json({ message: error.message });
    }
  }

  async getAllPackages(req, res, next) {
    try {
      const packages = await packageService.getAllPackages();
      res.status(OK).json(packages);
    } catch (error) {
      next(error);
    }
  }

  async getPackageById(req, res, next) {
    try {
      const travelPackage = await packageService.getPackageById(req.params.id);
      res.status(OK).json(travelPackage);
    } catch (error) {
      res.status(NOT_FOUND).json({ message: error.message });
    }
  }

  async updatePackage(req, res, next) {
    try {
      const travelPackage = await packageService.updatePackage(req.params.id, req.body);
      res.status(OK).json(travelPackage);
    } catch (error) {
      res.status(BAD_REQUEST).json({ message: error.message });
    }
  }

  async deletePackage(req, res, next) {
    try {
      await packageService.deletePackage(req.params.id);
      res.status(OK).json({ message: 'Package deleted successfully' });
    } catch (error) {
      res.status(NOT_FOUND).json({ message: error.message });
    }
  }
}

module.exports = new PackageController();
