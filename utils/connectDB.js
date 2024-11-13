const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://avaiyautsav:admin123@cluster0.5lw0gw1.mongodb.net/test"
    )
    .then((data) => {
      console.log(`mongoDB connected to server`);
    })
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;
