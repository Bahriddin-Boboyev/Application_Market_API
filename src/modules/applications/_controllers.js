const express = require("express");
const httpValidator = require("../../shared/http-validator");
const {
  showApplicationSchema,
  deleteApplicationSchema,
  patchApplicationSchema,
  postAddApplicationSchema,
} = require("./_schemas");

const addApplication = require("./add-application");
const editApplication = require("./edit-application");
const showApplication = require("./show-application");
const listApplications = require("./list-application");
const removeApplication = require("./remove-application");
const hasRole = require("../../shared/auth/has-role");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postApplication = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postAddApplicationSchema);

    const result = await addApplication(req.body, { id: req.user.id });

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
const patchApplication = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, patchApplicationSchema);
    const result = await editApplication({ id: req.params.id, ...req.body });
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
const getApplication = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showApplicationSchema);

    const result = await showApplication(req.params);
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
const getApplications = async (req, res, next) => {
  try {
    const result = await listApplications();

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
const deleteApplication = async (req, res, next) => {
  try {
    hasRole({ req, res, next }, "admin");
    httpValidator({ params: req.params }, deleteApplicationSchema);
    const result = await removeApplication(req.params);

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postApplication,
  patchApplication,
  getApplication,
  getApplications,
  deleteApplication,
};
