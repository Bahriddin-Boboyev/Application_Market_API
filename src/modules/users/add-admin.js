const { hash } = require("bcryptjs");
const User = require("./User");

const addAdmin = async (data) => {
  const existing = await User.findOne({
    where: { username: data.username },
  });

  if (existing?.dataValues) {
    throw new BadRequestError("Bunday foydalanuvchi allaqachon mavjud!");
  }

  const chunk = {
    password: (password = await hash(data.password, 10)),
    role: "admin",
  };

  const result = await User.create({ ...data, ...chunk });

  return result;
};

module.exports = addAdmin;
