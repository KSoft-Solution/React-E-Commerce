const User = require("../models/user.model");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const passport = require("passport");

const register = async (req, res, next) => {
  const { email, firstName, lastName, password, isSubscribed } = req.body;
  if (!email) {
    return res.status(400).json({ error: "You must enter an email address." });
  }

  if (!firstName || !lastName) {
    return res.status(400).json({ error: "You must enter your full name." });
  }

  if (!password) {
    return res.status(400).json({ error: "You must enter a password." });
  }

  try {
    await User.findOne({ email }, async (err, existingUser) => {
      err && next(err);
    });
  } catch (error) {
    error && res.status(400).json({ error: error });
  }
};

module.exports = {
  register,
};
