const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();
  //cookie options
  const options = {
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
