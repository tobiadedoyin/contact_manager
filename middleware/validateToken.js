const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
  }

  if (!authHeader || !authHeader.startsWith("Bearer") || !token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, process.env.accessToken_secret, (err, decoded) => {
    if (err) {
      return res.json("invalid token"); // Pass error to error handler
    }

    req.user = decoded.user; // Store user info in request for other middleware/routes
    next(); // Move to the next middleware
  });
};

module.exports = validateToken;
