const createMessage = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  res.status(201).json({
    success: true,
    message: "Message received successfully",
  });
};

module.exports = { createMessage };
