const { ForbiddenError } = require("../errors");

const hasRole = ({ req, res, next }, roles) => {
  const { role } = req.user;
  if (roles !== role) {
    throw new ForbiddenError("This road is forbidden");
  }
};

module.exports = hasRole;
