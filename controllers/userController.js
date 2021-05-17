const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const genrateToken = require("../utils/genrateToken");
module.exports.register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error("User Exist");
  }
  const userCreated = await User.create({
    name,
    email,
    password,
  });
  if (userCreated) {
    res.json({
      _id: userCreated._id,
      name: userCreated.name,
      password: userCreated.password,
      email: userCreated.email,
      token: genrateToken(userCreated._id),
    });
  }
});

module.exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.isPasswordMatch)) {
    res.status(200);
    res.json({
      _id: user._id,
      name: user.name,
      password: user.password,
      email: user.email,
      token: genrateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid creedentials ");
  }
});
