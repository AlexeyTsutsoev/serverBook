const { body } = require("express-validator");

const auth = {
  signUp: [
    body("name", "not exist name").exists(),
    body("email", "uncorrect email").isEmail(),
    body("password", "uncorrect password").isLength(3, 12),
    body("phone", "phone not exist").exists(),
  ],
  signIn: [
    body("password", "password doesn't exists").exists(),
    body("email", "uncorrect email").isEmail().exists(),
  ],
};

module.exports = auth;
