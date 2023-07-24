const { NotFoundError, BadRequestError } = require("../../shared/errors");
const User = require("./User");

const removeUser = async ({ id }) => {
  const existing = await User.findByPk(id);
  if (!existing) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }
  if (existing.role === "admin") {
    throw new BadRequestError("Kechirasiz siz adminni o'chira olmaysiz!");
  }
  const user = await User.destroy({ where: { id } });
  return existing;
};

module.exports = removeUser;
