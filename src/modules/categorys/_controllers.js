const express = require("express");
const httpValidator = require("../../shared/http-validator");
const {
  showCategorySchema,
  patchCategorySchema,
  deleteCategorySchema,
  postAddCategorySchema,
} = require("./_schemas");

const addCategory = require("./add-category");
const editCategory = require("./edit-category");
const showCategory = require("./show-category");
const listCategorys = require("./list-category");
const removeCategory = require("./remove-category");
const hasRole = require("../../shared/auth/has-role");
const { BadRequestError } = require("../../shared/errors");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postCategory = async (req, res, next) => {
  try {
    hasRole({ req, res, next }, "admin");
    httpValidator({ body: req.body }, postAddCategorySchema);

    const result = await addCategory(req.body);

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
const patchCategory = async (req, res, next) => {
  try {
    hasRole({ req, res, next }, "admin");
    httpValidator({ body: req.body }, patchCategorySchema);
    const result = await editCategory({ id: req.params.id, ...req.body });
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
const getCategory = async (req, res, next) => {
  try {
    const result = await showCategory(req.params);

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
const getCategorys = async (req, res, next) => {
  try {
    const result = await listCategorys();

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
const deleteCategory = async (req, res, next) => {
  try {
    hasRole({ req, res, next }, "admin");
    httpValidator({ params: req.params }, deleteCategorySchema);
    const result = await removeCategory(req.params);

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postCategory,
  patchCategory,
  getCategory,
  getCategorys,
  deleteCategory,
};
