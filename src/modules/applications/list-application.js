const { NotFoundError } = require("../../shared/errors");
const Application = require("./Application");

const listApplications = async () => {
  const result = await Application.findAll();

  if (!result) {
    throw new NotFoundError("Application not found!");
  }

  return result;
};

module.exports = listApplications;
