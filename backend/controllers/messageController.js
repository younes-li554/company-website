const Message = require('../models/Message');

// CREATE – إرسال رسالة
const createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // تحقق بسيط من البيانات
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    res.status(201).json({ message: "Message received successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save message" });
  }
};

// READ – جلب جميع الرسائل (للإدارة)
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};

// DELETE – حذف رسالة
const deleteMessage = async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete message" });
  }
};

module.exports = {
  createMessage,
  getMessages,
  deleteMessage
};
