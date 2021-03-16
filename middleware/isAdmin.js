const db = require("../db/models");

const isAdmin = async (request, response, next) => {
  try {
    console.log("is Admin MW-----", request.headers.userid);
    const userId = request.headers.userid;
    const user = await db.users.findByPk(userId);
    if (user.role === "admin") {
      return next();
    }
    return response
      .status(403)
      .json({ message: "You do not have access rights" });
  } catch (err) {
    console.log(err);
    return response.status(500).json({
      message: `error on server: ${err}`,
      type: err.name || "Common",
    });
  }
};

module.exports = isAdmin;

/*
400
401
403
404
500
*/
