const express = require("express");
const httpValidator = require("../../shared/http-validator");
const {
  postAddUserSchema,
  postLoginUserSchema,
  patchMeSchema,
  deleteUserSchema,
} = require("./_schemas");

const addAdmin = require("./add-admin");
const registerUser = require("./register-user");
const loginUser = require("./login-user");
const editUser = require("./edit-user");
const showUser = require("./show-user");
const showMeUser = require("./show-me-user");
const listUsers = require("./list-users");
const removeUser = require("./remove-user");
const hasRole = require("../../shared/auth/has-role");
const { BadRequestError } = require("../../shared/errors");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postAdmin = async (req, res, next) => {
  try {
    hasRole({ req, res, next }, "admin");
    httpValidator({ body: req.body }, postAddUserSchema);

    const result = await addAdmin(req.body);

    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postRegister = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postAddUserSchema);

    const result = await registerUser(req.body);

    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postLoginUser = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postLoginUserSchema);

    const result = await loginUser(req.body);

    res.status(200).json({
      token: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const patchMe = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, patchMeSchema);
    const result = await editUser({ id: req.user.id, ...req.body });

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getMe = async (req, res, next) => {
  try {
    const result = await showMeUser({ id: req.user.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getUser = async (req, res, next) => {
  try {
    hasRole({ req, res, next }, "admin");
    const result = await showUser(req.params);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getUsers = async (req, res, next) => {
  try {
    hasRole({ req, res, next }, "admin");
    const result = await listUsers({ id: req.user.id });

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const deleteUser = async (req, res, next) => {
  try {
    hasRole({ req, res, next }, "admin");
    httpValidator({ params: req.params }, deleteUserSchema);

    if (req.params === req.user.id) {
      throw new BadRequestError("Kechirasiz siz o'zingizni o'chira olmaysiz");
    }

    const result = await removeUser(req.params);

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postAdmin,
  postRegister,
  postLoginUser,
  patchMe,
  getMe,
  getUser,
  getUsers,
  deleteUser,
};
