const { NotFoundError } = require("../../shared/errors");
const User = require("./User");

const showMeUser = async ({ id }) => {
  const user = await User.findByPk(id);

  if (!user) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }

  return user;
};

module.exports = showMeUser;
