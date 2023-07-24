const { NotFoundError } = require("../../shared/errors");
const Category = require("./Category");

const listCategorys = async () => {
  const result = await Category.findAll();

  if (!result) {
    throw new NotFoundError("Category not found!");
  }

  return result;
};

module.exports = listCategorys;
