const { NotFoundError, BadRequestError } = require("../../shared/errors");
const User = require("./User");
const bcrypt = require("bcryptjs");

const editUser = async ({ id, ...changes }) => {
  const existing = await User.findByPk(id);

  if (!existing) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }
  let hashPassword = {};
  if (changes.password) {
    hashPassword.password = bcrypt.hashSync(changes.password, 10);
  }

  if (Object.keys(changes).length === 0) {
    throw new BadRequestError("Kechirasiz siz hech narsani o'zgartirmadingiz!");
  }

  const user = await User.update(
    { ...changes, ...hashPassword },
    {
      where: { id },
      returning: ["id", "firstName", "lastName", "username", "role"],
    }
  );

  return user[1];
};

module.exports = editUser;
