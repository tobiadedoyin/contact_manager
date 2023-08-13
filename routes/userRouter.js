const { Router } = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controller/userController");
const validateToken = require("../middleware/validateToken");

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/currentUser", validateToken, currentUser);

module.exports = router;
