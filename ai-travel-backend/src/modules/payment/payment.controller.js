const service = require('./payment.service');
const { OK, CREATED, NOT_FOUND } = require('../../shared/constants/statusCodes');
class PaymentController {
  async create(req, res, next) { try { res.status(CREATED).json(await service.create(req.body)); } catch (e) { next(e); } }
  async getAll(req, res, next) { try { res.status(OK).json(await service.getAll()); } catch (e) { next(e); } }
  async getById(req, res, next) { try { const item = await service.getById(req.params.id); if (!item) return res.status(NOT_FOUND).json({ message: 'Not found' }); res.status(OK).json(item); } catch (e) { next(e); } }
  async update(req, res, next) { try { res.status(OK).json(await service.update(req.params.id, req.body)); } catch (e) { next(e); } }
  async delete(req, res, next) { try { await service.delete(req.params.id); res.status(OK).json({ message: 'Deleted' }); } catch (e) { next(e); } }
}
module.exports = new PaymentController();
