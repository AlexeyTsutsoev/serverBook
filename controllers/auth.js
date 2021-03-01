const db = require("../db/models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { request, response } = require("express");
const config = require("../config");

const signUp = async (request, response) => {
  try {
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
    return response.status(201).json({ message: "User created" });
  } catch (err) {
    console.log("reg error", err);
    response.send({ message: "Error on server" });
  }
};

const signIn = async (request, response) => {
  try {
    const { email, password } = request.body;

    const candidate = await db.users.findOne({
      where: {
        email,
      },
    });

    if (!candidate) {
      return response
        .status(400)
        .json({ message: "Нет пользователя с такой почтой" });
    }

    const isMatchPass = await bcryptjs.compare(password, candidate.password);

    if (!isMatchPass) {
      return response.status(400).json({ message: "Пароли не совпадают" });
    }

    const token = jwt.sign({ userId: candidate.id }, config.jwt.secret, {
      expiresIn: config.jwt.expiresIn,
    });

    return response.status(201).json({
      token,
      user: {
        id: candidate.id,
        name: candidate.name,
        email: candidate.email,
        avatar: candidate.avatar,
      },
    });
  } catch (err) {
    console.log("reg error", err);
    response.status(500).send({ message: "Error on server" });
  }
};

module.exports = {
  signUp,
  signIn,
};
