const express = require("express");
const multer = require("multer");
const authCtrl = require("../controllers/auth");
const validate = require("../validators");
const authVal = require("../validators/auth");
const isAuthenticated = require("../middleware/isAuthorized");
const test = require("../middleware/test");

const upload = multer({ dest: "./public/avatars" });

const router = express.Router();

router.post("/sign-up", validate(authVal.signUp), authCtrl.signUp);
router.post("/sign-in", validate(authVal.signIn), authCtrl.signIn);
router.get("/me", isAuthenticated, authCtrl.checkUser);
router.post("/refresh", authCtrl.refreshToken);
router.post(
  "/avatar",
  isAuthenticated,
  test,
  upload.single("avatar"),
  test,
  authCtrl.ChangeAvatar
);

module.exports = router;
