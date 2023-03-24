const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide an firstName!"],
  },
  lastName: {
    type: String,
    required: [true, "Please provide an lastName!"],
  },
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide an Password!"],
    unique: false,
  },
  phoneNumber: {
    type: Number,
    minimum: 0,
  },
  address: {
    type: String,
    required: [true, "Please provide an Address!"],
  },
  userRole: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserRole",
  },
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
