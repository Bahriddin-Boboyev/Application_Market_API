const Joi = require("joi");

exports.postAddUserSchema = {
  body: Joi.object({
    firstName: Joi.string().min(4).max(50).required(),
    lastName: Joi.string().min(4).max(50).required(),
    username: Joi.string().min(4).max(30).required(),
    password: Joi.string().min(5).required(),
  }),
};

exports.postLoginUserSchema = {
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

exports.patchMeSchema = {
  body: Joi.object({
    firstName: Joi.string().min(4).max(50),
    lastName: Joi.string().min(4).max(50),
    username: Joi.string().min(4).max(30),
    password: Joi.string().min(5),
  }),
};

exports.showUserSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.patchUserSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    firstName: Joi.string().min(4).max(50),
    lastName: Joi.string().min(4).max(50),
    username: Joi.string().min(4).max(30),
    password: Joi.string().min(5),
  }),
};

exports.deleteUserSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
