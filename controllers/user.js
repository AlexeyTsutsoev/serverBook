const bcryptjs = require("bcryptjs");
const config = require("../config");
const db = require("../db/models");
const createTokensPair = require("../utils");
const ADMIN_EMAIL = "admin.com";
const MANANGER_EMAIL = "bookstore.com";

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

    let role;

    switch (email.split("@")[1]) {
      case ADMIN_EMAIL:
        role = "admin";
        break;
      case MANANGER_EMAIL:
        role = "manager";
      default:
        role = "user";
    }

    const hashPassword = await bcryptjs.hash(password, 10);

    await db.users.create({
      name,
      email,
      phone,
      password: hashPassword,
      role,
    });
    return response.status(201).json({ message: "User created" });
  } catch (err) {
    console.log("reg error", err);
    return response.status(500).send({ message: "Error on server" });
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

    const token = createTokensPair(candidate);

    return response.status(201).json({
      token,
      user: {
        id: candidate.id,
        name: candidate.name,
        email: candidate.email,
        avatar: candidate.avatar,
        role: candidate.role,
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
        role: user.role,
      },
    });
  } catch (err) {
    console.log("auth error", err);
    response.status(500).send({ message: "Error on server" });
  }
};

const refreshToken = async (request, response) => {
  try {
    const user = await db.users.findByPk(request.body.user.id);
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
        role: user.role,
      },
    });
  } catch (err) {
    console.log("auth error", err);
    return response.status(500).send({ message: "Error on server" });
  }
};

const ChangeAvatar = async (request, response) => {
  const filedata = request.file;
  const userId = request.user.userId;

  await db.users.update(
    { avatar: `${config.common.serverName}/${filedata.path}` },
    {
      where: { id: userId },
    }
  );

  if (!filedata) {
    return response.status(500).send({ message: "Error on server" });
  }
  return response.status(201).send({ message: "Файл загружен" });
};

module.exports = {
  signUp,
  signIn,
  checkUser,
  refreshToken,
  ChangeAvatar,
};
