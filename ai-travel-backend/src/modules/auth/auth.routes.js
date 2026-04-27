const express = require('express');
const authController = require('./auth.controller');

const router = express.Router();

// GET /api/auth/check
router.get("/check", (req, res) => {
    res.json({ message: "Auth route is working! 🚀" });
});

// POST /api/auth/register
router.post('/register', authController.register);

// POST /api/auth/login
router.post('/login', authController.login);

module.exports = router;

