const { config } = require("dotenv");
const express = require("express");
const router = require("./routes/contactRoute");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");

config();
const app = express();

const PORT = process.env.PORT || 4010;
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/contacts", router);
app.use(errorHandler);

app.listen(PORT, (req, res) => {
  console.log(`server is listening on localhost:${PORT}`);
});
