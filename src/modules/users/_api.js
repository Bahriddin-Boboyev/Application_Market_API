const express = require("express");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const {
  postLoginUser,
  patchMe,
  getMe,
  deleteUser,
  getUsers,
  getUser,
  postAdmin,
  postRegister,
} = require("./_controllers");

const router = express.Router();

router.post("/users/add", isLoggedIn, postAdmin);
router.post("/users/register", isLoggedIn, postRegister);
router.post("/users/login", postLoginUser);
router.get("/users/me", isLoggedIn, getMe);
router.get("/users/:id", isLoggedIn, getUser);
router.get("/users", isLoggedIn, getUsers);
router.patch("/users/me", isLoggedIn, patchMe);
router.delete("/users/:id", isLoggedIn, deleteUser);

module.exports = router;
