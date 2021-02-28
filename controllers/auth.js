const db = require("../db/models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { request, response } = require("express");
const config = require("../config");
// const { validationResult } = require("express-validator");

const signUp = async (request, response) => {
  try {
    // const valErrors = validationResult(request);

    // if (!valErrors.isEmpty()) {
    //   return response.status(400).json({ errors: valErrors.errors });
    // }

    const { name, email, password, phone } = request.body;

    const existingUser = await db.users.findOne({
      where: {
        email: request.body.email,
      },
    });
    if (existingUser) {
      return response
        .status(400)
        .json({ message: `user with ${email} alredy exist` });
    }

    const hashPassword = await bcryptjs.hash(password, 10);

    const newUser = await db.users.create({
      name,
      email,
      phone,
      password: hashPassword,
    });
    return response.json({ message: "User created" });
  } catch (err) {
    console.log("reg error", err);
    response.send({ message: "Error on server" });
  }
};

const signIn = async (request, response) => {
  try {
    //validator from middleware

    const { email, password } = request.body;

    const candidate = await db.users.findOne({
      where: {
        email: request.body.email,
      },
    });

    if (!candidate) {
      return response.status(400).json({ message: "Не корректные данные" });
    }

    const isMatchPass = await bcryptjs.compare(password, candidate.password);

    if (!isMatchPass) {
      return response.status(400).json({ message: "Не корректные данные" });
    }

    const token = jwt.sign({ userId: candidate.id }, config.jwt.secret, {
      expiresIn: config.jwt.expiresIn,
    });

    return response.json({ token, userID: candidate.id });
  } catch (err) {
    console.log("reg error", err);
    response.send({ message: "Error on server" });
  }
};

module.exports = {
  signUp,
  signIn,
};
