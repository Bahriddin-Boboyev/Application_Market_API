const { NotFoundError, BadRequestError } = require("../../shared/errors");
const Category = require("./Category");

const editCategory = async ({ id, ...changes }) => {
  const existing = await Category.findByPk(id);

  if (!existing) {
    throw new NotFoundError("Category topilmadi.");
  }

  if (Object.keys(changes).length === 0) {
    throw new BadRequestError("Kechirasiz siz hech narsani o'zgartirmadingiz!");
  }

  const category = await Category.update(
    { ...changes },
    {
      where: { id },
      returning: true,
    }
  );

  return category[1];
};

module.exports = editCategory;
