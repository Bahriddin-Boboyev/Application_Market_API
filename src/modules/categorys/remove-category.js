const { NotFoundError } = require("../../shared/errors");
const Category = require("./Category");

const removeCategory = async ({ id }) => {
  const existing = await Category.findByPk(id);

  if (!existing) {
    throw new NotFoundError("Category topilmadi.");
  }

  const category = await Category.destroy({ where: { id } });
  return existing;
};

module.exports = removeCategory;
