const express = require("express");
const multer = require("multer");
const userCtrl = require("../controllers/user");
const validate = require("../validators");
const authVal = require("../validators/auth");
const isAuthenticated = require("../middleware/isAuthorized");

const upload = multer({ dest: "./public/avatars" });

const router = express.Router();

router.post("/sign-up", validate(authVal.signUp), userCtrl.signUp);
router.post("/sign-in", validate(authVal.signIn), userCtrl.signIn);
router.get("/me", isAuthenticated, userCtrl.checkUser);
router.post("/refresh", userCtrl.refreshToken);
router.post(
  "/avatar",
  isAuthenticated,
  upload.single("avatar"),
  userCtrl.ChangeAvatar
);

module.exports = router;
