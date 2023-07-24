const { NotFoundError, BadRequestError } = require("../../shared/errors");
const Application = require("./Application");

const editApplication = async ({ id, ...changes }) => {
  const existing = await Application.findByPk(id);

  if (!existing) {
    throw new NotFoundError("Application topilmadi.");
  }

  if (Object.keys(changes).length === 0) {
    throw new BadRequestError("Kechirasiz siz hech narsani o'zgartirmadingiz!");
  }

  const application = await Application.update(
    { ...changes },
    {
      where: { id },
      returning: true,
    }
  );

  return application[1];
};

module.exports = editApplication;
