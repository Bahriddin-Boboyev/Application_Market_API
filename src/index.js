const express = require("express");
const config = require("./shared/config");
const handleError = require("./shared/errors/handle");
const usersRoute = require("./modules/users/_api");
const categorysRoute = require("./modules/categorys/_api");
const applicationsRoute = require("./modules/applications/_api");

const app = express();

app.use(express.json());

app.use(usersRoute);
app.use(categorysRoute);
app.use(applicationsRoute);

app.use(handleError);

app.listen(config.port, () => {
  console.log(`Server ${config.port}-portda ishlayapti.`);
});
