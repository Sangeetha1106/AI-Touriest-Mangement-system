const express = require('express');
const router = express.Router();
const travelPlanController = require('../modules/travelPlan/travelPlan.controller');

// POST - Create Travel Plan (Dynamic AI Logic)
router.post('/plan', travelPlanController.createPlan);

// GET - Fetch Travel Plan (Placeholder for now, can be updated later to fetch from DB)
router.get('/plan/:id', (req, res) => {
  res.status(200).json({
    success: true,
    message: "Fetch logic will be updated to use database soon.",
    planId: req.params.id
  });
});

module.exports = router;