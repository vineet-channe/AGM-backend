const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username required"],
  },
  email: {
    type: String,
    required: [true, "Email required"],
  },
  password: {
    type: String,
    required: [true, "Password required"],
  },
});

//Creating JWT
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, "admin123", {
    expiresIn: "2 days",
  });
};

module.exports = mongoose.model("User", userSchema);
