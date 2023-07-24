const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../../modules/users/User");
const config = require("../config");
const { UnauthorizedError, NotFoundError } = require("../errors");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw new UnauthorizedError("Unauthorized.");
    }

    const decoded = jwt.verify(token, config.jwt.secret, {
      ignoreExpiration: false,
    });

    req.user = decoded.user;
    const user = await User.findByPk(decoded.user.id);

    if (!user) {
      throw new NotFoundError("Foydalanuvchi tokeni eskirgan.");
    }

    next();
  } catch (error) {
    next(new UnauthorizedError(error.message));
  }
};

module.exports = isLoggedIn;
