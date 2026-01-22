const express = require('express');
const router = express.Router();

// ADDED: Middleware to protect admin routes
const adminOnly = require('../middleware/authMiddleware');

// Import controller functions
const {
  createMessage,
  getMessages,
  deleteMessage
} = require('../controllers/messageController');

/* =======================
   ROUTES
   ======================= */

// PUBLIC: Anyone can send a message (Contact Form)
router.post('/', createMessage);

// PROTECTED: Only admin can view messages
router.get('/', adminOnly, getMessages);

// PROTECTED: Only admin can delete messages
router.delete('/:id', adminOnly, deleteMessage);

module.exports = router;
