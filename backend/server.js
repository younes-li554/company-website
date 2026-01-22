const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');          // 🔐 ADDED: JWT for security tokens
const morgan = require('morgan');             // 📝 ADDED: Logging requests
require('./db');                               // Database connection

const messageRoutes = require('./routes/messageRoutes');

const app = express();
const PORT = 5000;

/* =======================
   MIDDLEWARE
   ======================= */

// ADDED: Log every request (method, URL, status)
app.use(morgan("dev"));

// MODIFIED: CORS restricted to frontend only
app.use(cors({
  origin: "http://localhost:3000" // React frontend URL
}));

// Parse JSON body
app.use(express.json());

/* =======================
   ROUTES
   ======================= */

// ADDED: Temporary route to generate admin JWT token (for testing security)
app.get("/api/admin-token", (req, res) => {
  const token = jwt.sign(
    { role: "admin" },          // Payload (user role)
    "SECRET_KEY",               // Secret key (should be in .env in production)
    { expiresIn: "1h" }         // Token expiration
  );

  res.json({ token });
});

// Messages API
app.use('/api/messages', messageRoutes);

// Test route
app.get('/', (req, res) => {
  res.send("Company Website Backend is running ✅");
});

/* =======================
   SERVER
   ======================= */

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
