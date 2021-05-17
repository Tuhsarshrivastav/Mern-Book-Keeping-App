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
module.exports.login = (req, res) => {
  res.send("login api");
};