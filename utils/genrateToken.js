const jwt = require("jsonwebtoken");

const genrateToken = (userId) => {
  return jwt.sign({ id: userId }, "node.js", {
    expiresIn: "30d",
  });
};
module.exports = genrateToken