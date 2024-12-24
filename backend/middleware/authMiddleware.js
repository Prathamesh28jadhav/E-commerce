const jwt = require('jsonwebtoken');

// Middleware to authenticate user
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(403).json({ error: 'Access denied, no token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

module.exports = authMiddleware;
