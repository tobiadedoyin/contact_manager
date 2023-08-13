const { config } = require("dotenv");
const express = require("express");
const contactRoutes = require("./routes/contactRoute");
const userRoutes = require("./routes/userRouter");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const helmet = require("helmet");

config();
const app = express();

const PORT = process.env.PORT || 4010;
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/contacts", contactRoutes);
app.use("/api/user", userRoutes);
app.use(errorHandler);
app.use(helmet());

app.listen(PORT, (req, res) => {
  console.log(`server is listening on localhost:${PORT}`);
});
