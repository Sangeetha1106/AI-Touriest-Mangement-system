const Package = require('./package.model');

class PackageService {
  async createPackage(data) {
    return await Package.create(data);
  }

  async getAllPackages() {
    return await Package.findAll();
  }

  async getPackageById(id) {
    const travelPackage = await Package.findByPk(id);
    if (!travelPackage) throw new Error('Package not found');
    return travelPackage;
  }

  async updatePackage(id, data) {
    const travelPackage = await Package.findByPk(id);
    if (!travelPackage) throw new Error('Package not found');
    return await travelPackage.update(data);
  }

  async deletePackage(id) {
    const travelPackage = await Package.findByPk(id);
    if (!travelPackage) throw new Error('Package not found');
    return await travelPackage.destroy();
  }
}

module.exports = new PackageService();
