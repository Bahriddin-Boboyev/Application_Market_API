const express = require("express");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const {
  postApplication,
  patchApplication,
  getApplication,
  getApplications,
  deleteApplication,
} = require("./_controllers");

const router = express.Router();

router.post("/application", isLoggedIn, postApplication);
router.get("/application", isLoggedIn, getApplications);
router.get("/application/:id", isLoggedIn, getApplication);
router.patch("/application/:id", isLoggedIn, patchApplication);
router.delete("/application/:id", isLoggedIn, deleteApplication);

module.exports = router;
