const express = require('express');
const authController = require('./auth.controller');

const router = express.Router();

// GET /api/auth/check
router.get("/check", (req, res) => {
    res.json({ message: "Auth route is working! 🚀" });
});

const { validateRegister, validateLogin } = require('./auth.validation');

// POST /api/auth/register
router.post('/register', validateRegister, authController.register);

// POST /api/auth/login
router.post('/login', validateLogin, authController.login);

module.exports = router;

