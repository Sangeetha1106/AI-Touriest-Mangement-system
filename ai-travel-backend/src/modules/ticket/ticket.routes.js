const express = require('express');
const ticketController = require('./ticket.controller');
const { authenticate: authMiddleware } = require('../../shared/middleware/auth.middleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/create', ticketController.bookTicket);
router.get('/all', ticketController.getAllTickets);
router.get('/:id', ticketController.getTicketById);
router.put('/:id', ticketController.updateTicketStatus);
router.delete('/:id', ticketController.cancelTicket);

module.exports = router;

