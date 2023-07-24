const { compare } = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../../shared/errors");
const config = require("../../shared/config");
const User = require("./User");

const loginUser = async ({ username, password }) => {
  const { dataValues } = await User.findOne({ where: { username } });

  if (!dataValues) {
    throw new UnauthorizedError("Incorrect username or password.");
  }

  const match = await compare(password, dataValues.password);

  if (!match) {
    throw new UnauthorizedError("Incorrect username or password.");
  }

  const token = jwt.sign(
    { user: { id: dataValues.id, role: dataValues.role } },
    config.jwt.secret
  );
  return token;
};

module.exports = loginUser;
