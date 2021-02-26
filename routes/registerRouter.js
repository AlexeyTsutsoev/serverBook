const { request, response } = require("express");
const express = require("express");
const bcryptjs = require("bcryptjs");
const { check, body, validationResult } = require("express-validator");
const db = require("../db/models");

// db.users.findOne({})

const registerRouter = express.Router();
registerRouter.get("/", (req, res) => {
  res.send("ok");
});

registerRouter.post(
  "/registration",

  body("email", "uncorrect email").isEmail(),
  body("password", "uncorrect password").isLength(3, 12),
  async (request, response) => {
    try {
      const valErrors = validationResult(request);
      if (!valErrors.isEmpty()) {
        return response.status(400).json({ errors: valErrors.errors });
      }

      const { name, email, password, phoneNumber } = request.body;

      //How do?
      const existingUser = await db.users.findOne({ email });
      if (existingUser) {
        return response
          .status(400)
          .json({ message: `user with ${email} alredy exist` });
      }

      const hashPassword = await bcryptjs.hash(password, 15);

      const newUser = await db.users.create({
        name,
        email,
        password,
        phoneNumber,
      });
      //newUser.save();
      return response.json({ message: "User created" });
    } catch (err) {
      console.log("reg error", err);
      response.send({ message: "Error on server" });
    }
  }
);

module.exports = registerRouter;
