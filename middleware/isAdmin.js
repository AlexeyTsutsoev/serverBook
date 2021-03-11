const db = require("../db/models");

const isAdmin = async (request, response, next) => {
  try {
    // const isAdmin = request.headers.isAdmin;  !!!!!!!!!Can i do like this?!!!!!!!!!!!!!!!!
    const userId = request.headers.userid;
    const user = await db.users.findByPk(userId);
    if (user.isAdmin) {
      next();
    } else {
      return response
        .status(401)
        .json({ message: "You do not have access rights" });
    }
  } catch (err) {
    console.log(err);
    return response.status(401).json({
      message: `error on server: ${err}`,
      type: err.name || "Common",
    });
  }
};

module.exports = isAdmin;
