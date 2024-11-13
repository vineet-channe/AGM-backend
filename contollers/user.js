const User = require("../Models/user");
const sendToken = require("../utils/sendToken");
const { authorize } = require("../utils/Oauth");
const { uploadBasic } = require("../utils/Oauth");
const process = require("process");
const path = require("path");

exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({
      username,
      email,
      password,
    });
    sendToken(user, 201, res);
  } catch (err) {
    console.log(err);
  }
};

exports.uploadFile = async (req, res, next) => {
  try {
    const filename = req.files.file.name;
    const file = req.files.file;
    file.mv(path.join(process.cwd(), `pdfs/${filename}`), async () => {
      console.log("Saved file on server");
      authorize().then((auth) => uploadBasic(auth, file, filename, res));
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      throw new Error("Email not found!");
    }
    if (password === user.password) {
      sendToken(user, 201, res);
    }
  } catch (err) {}
};
