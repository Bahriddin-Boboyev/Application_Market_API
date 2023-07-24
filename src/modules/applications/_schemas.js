const Joi = require("joi");

exports.postAddApplicationSchema = {
  body: Joi.object({
    name: Joi.string().min(4).max(100).required(),
    categoryId: Joi.number().integer().required(),
  }),
};

exports.showApplicationSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.patchApplicationSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    name: Joi.string().min(4).max(100),
    categoryId: Joi.number().integer(),
  }),
};

exports.deleteApplicationSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
