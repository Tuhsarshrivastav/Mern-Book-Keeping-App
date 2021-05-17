const User = require("../models/User");
const asyncHandler = require("express-async-handler");

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
  res.send(userCreated);
});

module.exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    res.status(200);
    res.json({
      _id: user._id,
      name: user.name,
      password: user.password,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid creedentials ");
  }
});
