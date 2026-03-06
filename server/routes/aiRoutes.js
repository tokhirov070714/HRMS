const express = require('express');
const router = express.Router();
const { chat } = require('../controllers/aiController.js');

// POST /api/ai/chat - Send message to AI assistant
router.post('/chat', chat);

module.exports = router;