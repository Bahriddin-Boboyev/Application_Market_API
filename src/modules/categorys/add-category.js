const Category = require("./Category");
const { BadRequestError } = require("../../shared/errors");

const addCategory = async (data) => {
  const existing = await Category.findOne({
    where: { name: data.name },
  });

  if (existing?.dataValues) {
    throw new BadRequestError("Bunday categorya allaqachon mavjud!");
  }

  const result = await Category.create(data);
  return result;
};

module.exports = addCategory;
