const db = require("../db/models");

const signUp = async (req, res) => {
  try {
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
};

module.exports = {
  signUp,
};
