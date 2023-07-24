const { NotFoundError } = require("../../shared/errors");
const Application = require("./Application");

const showApplication = async ({ id }) => {
  const application = await Application.findByPk(id);

  if (!Application) {
    throw new NotFoundError("Application topilmadi.");
  }

  return application;
};

module.exports = showApplication;
