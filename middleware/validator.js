const { body } = require("express-validator");

const validator = async () => {
  body("email", "uncorrect email").isEmail();
  body("password", "uncorrect password").isLength(3, 12);
};

module.exports = {
  validator,
};
