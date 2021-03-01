const { validationResult } = require("express-validator");

const validate = (validations) => async (request, response, next) => {
  try {
    await Promise.all(validations.map((validation) => validation.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    return next();
  } catch (err) {
    return response.status(500).json({ message: err.message });
  }
};

module.exports = validate;
