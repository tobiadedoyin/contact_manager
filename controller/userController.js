const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const userValidation = require("../validation/inputValidation");
const jwt = require("jsonwebtoken");
//register a user
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userData = { username, email, password };
    const validation = userValidation.userValidation.safeParse(userData);

    if (!validation.success) {
      return res
        .status(400)
        .json({ message: validation.error.issues[0].message });
    }
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "username, email and password cannot be empty" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "email already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const registeredUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({
      message: `congratulations ${username}, your account is created successfully`,
      data: registeredUser,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};
//login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are mandatory" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    const comparePassword = await bcrypt.compare(password, user.password);

    if (user && comparePassword) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            id: user.id,
          },
        },
        process.env.accessToken_secret,
        { expiresIn: "24h" }
      );
      return res
        .status(200)
        .json({ message: `welcome ${user.username}`, token: accessToken });
    }
  } catch (error) {}
};
//get current user
const currentUser = async (req, res) => {
  try {
    return res.status(200).json("welcome");
  } catch (error) {}
};

module.exports = { registerUser, loginUser, currentUser };
