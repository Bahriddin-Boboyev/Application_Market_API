const { NotFoundError } = require("../../shared/errors");
const Category = require("./Category");

const showCategory = async ({ id }) => {
  const category = await Category.findByPk(id);

  if (!category) {
    throw new NotFoundError("Category topilmadi.");
  }

  return category;
};

module.exports = showCategory;
