const Application = require("./Application");
const { BadRequestError } = require("../../shared/errors");

const addApplication = async (data, { id }) => {
  const existing = await Application.findOne({
    where: { name: data.name },
  });

  if (existing?.dataValues) {
    throw new BadRequestError("Bunday Application allaqachon mavjud!");
  }

  const chunk = { userId: id };
  const result = await Application.create({ ...data, ...chunk });
  return result;
};

module.exports = addApplication;
