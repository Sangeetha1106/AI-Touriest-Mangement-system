const Vendor = require('./vendor.model');
class VendorService {
  async create(data) { return await Vendor.create(data); }
  async getAll() { return await Vendor.findAll(); }
  async getById(id) { return await Vendor.findByPk(id); }
  async update(id, data) {
    const item = await Vendor.findByPk(id);
    if (!item) throw new Error('Vendor not found');
    return await item.update(data);
  }
  async delete(id) {
    const item = await Vendor.findByPk(id);
    if (!item) throw new Error('Vendor not found');
    return await item.destroy();
  }
}
module.exports = new VendorService();
