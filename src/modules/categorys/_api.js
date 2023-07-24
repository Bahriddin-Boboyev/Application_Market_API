const express = require("express");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const {
  postCategory,
  patchCategory,
  getCategory,
  getCategorys,
  deleteCategory,
} = require("./_controllers");

const router = express.Router();

router.post("/category", isLoggedIn, postCategory);
router.get("/category", isLoggedIn, getCategorys);
router.get("/category/:id", isLoggedIn, getCategory);
router.patch("/category/:id", isLoggedIn, patchCategory);
router.delete("/category/:id", isLoggedIn, deleteCategory);

module.exports = router;
