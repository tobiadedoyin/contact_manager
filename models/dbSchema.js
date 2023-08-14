const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "please add contact name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "please add email address"],
      trim: true,
      set: (value) => value.toLowerCase(),
    },
    phone: {
      type: String,
      requires: [true, "please add phone number"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("contact", contactSchema);
