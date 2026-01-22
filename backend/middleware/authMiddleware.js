const jwt = require("jsonwebtoken");

const adminOnly = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "SECRET_KEY");

    if (decoded.role !== "admin") {
      return res.status(403).json({ error: "Access denied" });
    }

    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = adminOnly;
