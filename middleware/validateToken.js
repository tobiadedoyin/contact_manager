const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
  }

  jwt.verify(token, process.env.accessToken_secret, (err, decoded) => {
    if (err) {
      return next(err); // Pass error to error handler
    }
    console.log(decoded);
    req.user = decoded; // Store user info in request for other middleware/routes
    next(); // Move to the next middleware
  });
};

module.exports = validateToken;
