const Joi = require("joi");

exports.postAddCategorySchema = {
  body: Joi.object({
    name: Joi.string().min(4).max(100).required(),
  }),
};

exports.showCategorySchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.patchCategorySchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    name: Joi.string().min(4).max(100),
  }),
};

exports.deleteCategorySchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
