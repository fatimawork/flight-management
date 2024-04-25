const express = require('express');
const router = express.Router();
const authController = require('../Services/auth.controller');

// Registration endpoint
router.post('/register', authController.register);

// Authentication endpoint
router.post('/login', authController.login);

module.exports = router;
