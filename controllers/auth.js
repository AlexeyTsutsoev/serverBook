const bcryptjs = require("bcryptjs");
const db = require("../db/models");
const createTokensPair = require("../utils");

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

    await db.users.create({
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

    console.log("match check", isMatchPass); //!!!!

    if (!isMatchPass) {
      return response.status(400).json({ message: "Пароли не совпадают" });
    }

    const token = createTokensPair(candidate);

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

const checkUser = async (request, response) => {
  try {
    const user = await db.users.findByPk(request.user.userId);
    if (!user) {
      return response.status(404).json({
        message: "There is no such user",
      });
    }

    return response.status(201).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } catch (err) {
    console.log("auth error", err);
    response.status(500).send({ message: "Error on server" });
  }
};

const refreshToken = async (request, response) => {
  try {
    console.log(request.user);
    const user = await db.users.findByPk(request.user.userId);
    if (!user) {
      return response.status(404).json({
        message: "There is no such user",
      });
    }

    const token = createTokensPair(user);

    return response.status(201).json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } catch (err) {
    console.log("auth error", err);
    response.status(500).send({ message: "Error on server" });
  }
};

module.exports = {
  signUp,
  signIn,
  checkUser,
  refreshToken,
};
