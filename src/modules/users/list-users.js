const { NotFoundError } = require("../../shared/errors");
const User = require("./User");

const listUsers = async () => {
  const result = await User.findAll({
    attributes: ["id", "firstName", "lastName", "username", "role"],
  });

  if (!result) {
    throw new NotFoundError("User not found!");
  }

  return result;
};

module.exports = listUsers;
