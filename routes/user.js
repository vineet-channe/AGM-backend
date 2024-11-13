const { register, uploadFile, login } = require("../contollers/user");

const router = require("express").Router();

router.route("/register").post(register);
router.route("/upload").post(uploadFile);
router.route("/login").post(login);

module.exports = router;
