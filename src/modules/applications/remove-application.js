const { NotFoundError } = require("../../shared/errors");
const Application = require("./Application");

const removeApplication = async ({ id }) => {
  const existing = await Application.findByPk(id);

  if (!existing) {
    throw new NotFoundError("Application topilmadi.");
  }

  const application = await Application.destroy({ where: { id } });
  return existing;
};

module.exports = removeApplication;
